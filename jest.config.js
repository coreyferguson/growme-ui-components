module.exports = {
  setupFilesAfterEnv: [ './test/TestUtils' ],
  testMatch: [ '**/*.test.js', '**/*.test.jsx' ],
  testPathIgnorePatterns: ['node_modules/', 'dist/']
};