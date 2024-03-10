module.exports = {
    preset: 'react-native',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    testPathIgnorePatterns: ['/app/.*\\.ignore\\.ts$', '/src/.*\\.ignore\\.ts$', '/src/.*\\.png$'],
    setupFilesAfterEnv: ['./__setup__/setupAfterEnv.ts'],
    globals: {
        __DEV__: true
    }
};
