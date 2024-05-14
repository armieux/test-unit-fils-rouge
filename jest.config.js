module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-junit', {
            outputDirectory: 'test-results/junit',
            outputName: 'js-test-results.xml',
        }],
    ],
};
