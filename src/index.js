import path from 'path';
import { promises as fsPromises } from 'fs';

/* eslint-disable promise/prefer-await-to-callbacks, promise/no-callback-in-promise, promise/catch-or-return, unicorn/new-for-builtins */
export default class DiskPlugin {
  constructor({ debugAssets, output = '.', files = [] } = {}) {
    this.options = { output, files, debugAssets };
  }

  apply(compiler) {
    const { debugAssets, output: baseOutput, files } = this.options;
    const assetsToFind = Array.isArray(files) ? files : [files];

    compiler.hooks.afterEmit.tapAsync('DiskPlugin', (curCompiler, callback) => {
      const webpackAssets = Object.entries(curCompiler.assets);

      if (debugAssets) {
        console.log(
          webpackAssets.flatMap(([webpackAssetPath]) => webpackAssetPath),
        );
      }

      const assetsToUse = assetsToFind.reduce((acc, { asset, output }) => {
        const webpackAsset = webpackAssets.find(([webpackAssetPath]) => {
          const assetType = Object(asset).constructor;

          if (assetType === String) return asset === webpackAssetPath;
          if (assetType === RegExp) return asset.test(webpackAssetPath);
          if (assetType === Array) return asset.includes(webpackAssetPath);

          return false;
        });

        if (!webpackAsset) return acc;

        const filePath = path.resolve(
          output || baseOutput,
          webpackAsset.filename,
        );

        if (acc.has(filePath)) return acc;

        return acc.set(filePath, webpackAsset.content);
      }, new Map());

      Promise.all(
        [...assetsToUse.entries()].map(async ([file, asset]) => {
          await fsPromises.mkdir(path.dirname(file), { recursive: true });
          await fsPromises
            .writeFile(file, asset.source(), { encoding: 'utf-8', flag: 'w+' })
            .catch(() => callback(new Error(`Error writing ${file}`)));
        }),
      ).then(callback);
    });
  }
}
