/* eslint-disable import/no-commonjs, import/unambiguous */
module.exports = {
  maxMessageLength: 70,
  minMessageLength: 5,
  list: [
    'access',
    'analytics',
    'android',
    'animation',
    'arch',
    'assets',
    'beer',
    'breaking',
    'ci',
    'compat',
    'config',
    'contrib-add',
    'db',
    'dep-add',
    'dep-rm',
    'dep-up',
    'deploy',
    'docker',
    'docs',
    'docs-code',
    'downgrade',
    'egg',
    'experiment',
    'feature',
    'fix',
    'fix-ci',
    'flags',
    'gitignore',
    'hotfix',
    'i18n',
    'init',
    'ios',
    'k8s',
    'license',
    'lint',
    'linux',
    'log-add',
    'log-rm',
    'merge',
    'mock',
    'mv',
    'osx',
    'perf',
    'poo',
    'prune',
    'pushpin',
    'refactoring',
    'release',
    'responsive',
    'revert',
    'review',
    'security',
    'seed',
    'seo',
    'snapshot',
    'style',
    'test',
    'texts',
    'todo',
    'types',
    'typo',
    'ui',
    'update',
    'ux',
    'windows',
    'wip',
  ],
  types: {
    access: {
      emoji: '♿️',
      value: 'access',
      description: 'Improving accessibility.',
    },
    analytics: {
      emoji: '📈',
      value: 'analytics',
      description: 'Adding analytics or tracking code.',
    },
    android: {
      emoji: '🤖',
      value: 'android',
      description: 'Fixing something on Android.',
    },
    animation: {
      emoji: '💫',
      value: 'animation',
      description: 'Adding or updating animations and transitions',
    },
    arch: {
      emoji: '🏗',
      value: 'arch',
      description: ' Making architectural changes.',
    },
    assets: {
      emoji: '🍱',
      value: 'assets',
      description: 'Adding or updating assets.',
    },
    beer: {
      emoji: '🍻',
      value: 'beer',
      description: 'Writing code drunkenly.',
    },
    breaking: {
      emoji: '💥',
      value: 'breaking',
      description: 'Introducing breaking changes.',
    },
    ci: { emoji: '👷', value: 'ci', description: 'Adding CI build system.' },
    compat: {
      emoji: '👽',
      value: 'compat',
      description: 'Updating code due to external API changes.',
    },
    config: {
      emoji: '🔧',
      value: 'config',
      description: 'Changing configuration files.',
    },
    'contrib-add': {
      emoji: '👥',
      value: 'contrib-add',
      description: 'Adding contributor(s).',
    },
    db: {
      emoji: '🗃',
      value: 'db',
      description: ' Performing database related changes.',
    },
    'dep-add': {
      emoji: '➕',
      value: 'dep-add',
      description: 'Adding a dependency.',
    },
    'dep-rm': {
      emoji: '➖',
      value: 'dep-rm',
      description: 'Removing a dependency.',
    },
    'dep-up': {
      emoji: '📦',
      value: 'dep-up',
      description: 'Updating compiled files or packages.',
    },
    deploy: { emoji: '🚀', value: 'deploy', description: 'Deploying stuff.' },
    docker: { emoji: '🐳', value: 'docker', description: 'Work about Docker.' },
    docs: { emoji: '📝', value: 'docs', description: 'Writing docs.' },
    'docs-code': {
      emoji: '💡',
      value: 'docs-code',
      description: 'Documenting source code.',
    },
    downgrade: {
      emoji: '⬇️',
      value: 'downgrade',
      description: ' Downgrading dependencies.',
    },
    egg: { emoji: '🥚', value: 'egg', description: 'Adding an easter egg.' },
    experiment: {
      emoji: '⚗',
      value: 'experiment',
      description: ' Experimenting new things',
    },
    feature: {
      emoji: '✨',
      value: 'feature',
      description: 'Introducing new features.',
    },
    fix: { emoji: '🐛', value: 'fix', description: 'Fixing a bug.' },
    'fix-ci': { emoji: '💚', value: 'fix-ci', description: 'Fixing CI Build.' },
    flags: {
      emoji: '🚩',
      value: 'flags',
      description: 'Adding, updating, or removing feature flags',
    },
    gitignore: {
      emoji: '🙈',
      value: 'gitignore',
      description: 'Adding or updating a .gitignore file',
    },
    hotfix: { emoji: '🚑', value: 'hotfix', description: 'Critical hotfix.' },
    i18n: {
      emoji: '🌐',
      value: 'i18n',
      description: 'Internationalization and localization.',
    },
    init: { emoji: '🎉', value: 'init', description: 'Initial commit.' },
    ios: { emoji: '🍏', value: 'ios', description: 'Fixing something on iOS.' },
    k8s: { emoji: '☸️', value: 'k8s', description: ' Work about Kubernetes' },
    license: {
      emoji: '📄',
      value: 'license',
      description: 'Adding or updating license.',
    },
    lint: {
      emoji: '🚨',
      value: 'lint',
      description: 'Removing linter warnings.',
    },
    linux: {
      emoji: '🐧',
      value: 'linux',
      description: 'Fixing something on Linux.',
    },
    'log-add': { emoji: '🔊', value: 'log-add', description: 'Adding logs.' },
    'log-rm': { emoji: '🔇', value: 'log-rm', description: 'Removing logs.' },
    merge: { emoji: '🔀', value: 'merge', description: 'Merging branches.' },
    mock: { emoji: '🤡', value: 'mock', description: 'Mocking things.' },
    mv: { emoji: '🚚', value: 'mv', description: 'Moving or renaming files.' },
    osx: {
      emoji: '🍎',
      value: 'osx',
      description: 'Fixing something on macOS.',
    },
    perf: {
      emoji: '⚡️',
      value: 'perf',
      description: 'Improving performance.',
    },
    poo: {
      emoji: '💩',
      value: 'poo',
      description: 'Writing bad code that needs to be improved.',
    },
    prune: {
      emoji: '🔥',
      value: 'prune',
      description: 'Removing code or files.',
    },
    pushpin: {
      emoji: '📌',
      value: 'pushpin',
      description: 'Pinning dependencies to specific versions.',
    },
    refactoring: {
      emoji: '♻️',
      value: 'refactoring',
      description: ' Refactoring code.',
    },
    release: {
      emoji: '🔖',
      value: 'release',
      description: 'Releasing / Version tags.',
    },
    responsive: {
      emoji: '📱',
      value: 'responsive',
      description: 'Working on responsive design.',
    },
    revert: { emoji: '⏪', value: 'revert', description: 'Reverting changes.' },
    review: {
      emoji: '👌',
      value: 'review',
      description: 'Updating code due to code review changes.',
    },
    security: {
      emoji: '🔒',
      value: 'security',
      description: 'Fixing security issues.',
    },
    seed: {
      emoji: '🌱',
      value: 'seed',
      description: 'Adding or updating seed files',
    },
    seo: { emoji: '🔍', value: 'seo', description: 'Improving SEO' },
    snapshot: {
      emoji: '📸',
      value: 'snapshot',
      description: 'Adding or updating snapshots',
    },
    style: {
      emoji: '🎨',
      value: 'style',
      description: 'Improving structure / format of the code.',
    },
    test: { emoji: '✅', value: 'test', description: 'Adding tests.' },
    texts: {
      emoji: '💬',
      value: 'texts',
      description: 'Updating text and literals.',
    },
    todo: { emoji: '🗒', value: 'todo', description: 'Add or updating TODOs' },
    types: {
      emoji: '🏷️',
      value: 'types',
      description: ' Adding or updating types (Flow, TypeScript)',
    },
    typo: { emoji: '✏️', value: 'typo', description: ' Fixing typos.' },
    ui: {
      emoji: '💄',
      value: 'ui',
      description: 'Updating the UI and style files.',
    },
    update: {
      emoji: '⬆️',
      value: 'update',
      description: ' Upgrading dependencies.',
    },
    ux: {
      emoji: '🚸',
      value: 'ux',
      description: 'Improving user experience / usability.',
    },
    windows: {
      emoji: '🏁',
      value: 'windows',
      description: 'Fixing something on Windows.',
    },
    wip: { emoji: '🚧', value: 'wip', description: 'Work in progress.' },
  },
};