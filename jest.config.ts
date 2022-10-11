/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

// eslint-disable-next-line import/no-default-export
export default {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: './src',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    moduleNameMapper: {
      '@commons/(.*)': '<rootDir>/commons/$1',
      '@domain/(.*)': '<rootDir>/domain/$1',
    },
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/src/domain/',
      '/src/infra/commons',
      '/src/infra/data/',
      '/src/infra/services/',
      '/src/infra/controller/',
    ],
    coverageThreshold: {
      global: {
        lines: 60,
        branches: 20,
        functions: 60,
      },
    },
  };
  