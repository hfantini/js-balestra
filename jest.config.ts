import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    clearMocks: true,
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    setupFiles: ["jest-canvas-mock"],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageThreshold: {
        global: {
            lines: 95,
            functions: 95,
            branches: 95,
            statements: 95
        }
    },
    coveragePathIgnorePatterns: [
        "mocks"
    ]
};

export default config;