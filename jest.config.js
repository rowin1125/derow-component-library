module.exports = {
  testEnvironment: 'jsdom',
  rootDir: 'src',
  setupFilesAfterEnv: ['<rootDir>/../scripts/test/jest-setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../scripts/test/file.mock.js',
    '\\.(css|less|scss)$': '<rootDir>/../scripts/test/style.mock.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!gsap)'],
  transform: {
    '.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    '.+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
      '<rootDir>/../scripts/test/media-file.mock.js',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/../scripts/test',
      },
    ],
  ],
  verbose: true,
};
