module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}

// if we were not testing things that needs a dom tree then we could tell jest we want to use node instead of jsdom and save some time test running
