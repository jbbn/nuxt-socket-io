export default {
  require: ['@babel/register', './test/e2e.setup.js'],
  serial: true,
  files: ['test/e2e/IOStatus.spec.js'],
  sources: ['**/*.{js,vue}'],
  babel: {
    testOptions: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            alias: {
              '@': '.',
              '~': '.'
            }
          }
        ]
      ]
    }
  },
  tap: false, // true,
  verbose: true
}
