module.exports = {
  name: 'api',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t]s?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts'],
  coverageDirectory: '../../coverage/libs/api',
};
