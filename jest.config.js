module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}

// if we were not testing things that needs a dom tree then we could tell jest we want to use node instead of jsdom and save some time test running

// if you are using css modules tell jest that everything that uses .module.css to instead import identity-obj-proxy, which will return a string after styles.
// ex. className={styles.autoScalingText}   will read as   calss="autoScalingText"
