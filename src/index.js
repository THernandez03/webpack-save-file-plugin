import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

export default class DiskPlugin {
  constructor({ debugAssets, output = '.', files = [] } = {}) {
    this.options = { output, files, debugAssets };
  }

  apply(compiler) {
    const { debugAssets, output: baseOutput, files } = this.options;
    const assetsToFind = Array.isArray(files) ? files : [files];
    const assetsToUse = new Map();

    compiler.hooks.afterEmit.tapAsync(
      'DiskPlugin',
      async (curCompiler, callback) => {
        const { assets } = curCompiler;
        const webpackAssets = Object.keys(assets);

        if (debugAssets) console.log(webpackAssets);

        assetsToFind.forEach(({ asset, output }) => {
          const foundAsset = webpackAssets.find(
            webpackAsset =>
              Object.getPrototypeOf(asset).constructor === String
                ? asset === webpackAsset
                : asset.test(webpackAsset),
          );

          if (!foundAsset) return null;

          const pathToUse = path.resolve(output || baseOutput, foundAsset);

          if (assetsToUse.has(pathToUse)) return null;

          return assetsToUse.set(pathToUse, assets[foundAsset]);
        });

        await Promise.all(
          [...assetsToUse.entries()].map(async ([file, asset]) => {
            const directory = path.dirname(file);
            const { F_OK, W_OK } = fs.constants;

            await promisify(fs.access)(directory, F_OK | W_OK).catch(() =>
              promisify(fs.mkdir)(directory),
            );
            await promisify(fs.writeFile)(file, asset.source()).catch(() =>
              callback(new Error(`Error writing ${file}`)),
            );
          }),
        );

        return callback();
      },
    );
  }
}
