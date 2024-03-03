/** @type {import("ts-jest").JestConfigWithTsJest} */
export default {
  setupFiles: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  collectCoverageFrom: [
    "./lib/**/*.{js,jsx,ts,tsx}",
    "!./lib/**/*.stories.{js,jsx,ts,tsx}"
  ],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["node_modules", "lib/test", "lib/types", "lib/vite-env.d.ts"],
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
};