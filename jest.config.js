
module.exports={
    collectCoverage: true,

    globals:{
        window:true
    },
    collectCoverageFrom:["**/*.jsx", "**/*.js"],
    moduleDirectories:["node_modules",".","src"],
    testMatch:[
        "**/*.(test|spec).(js)",
        "**/*.(test|spec).(jsx)"
    ],

    setupFilesAfterEnv: [
        "<rootDir>/__tests__/setup.js"
    ],
    coveragePathIgnorePatterns:[
        "/node_modules/",
        "/public/",
        "/dist/",
        "jest.config.js",
        "packege.json",
        ".eslintrc.js",
        "webpack.config.js"
    ],

    moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '^/src/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment:"jsdom",


  coverageProvider: "v8",

  coverageReporters: ["json", "text", "lcov", "clover"],

  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node", "scss"],

  setupFiles: ["./src/setupTests.js"],

//   testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],


  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"]

};

