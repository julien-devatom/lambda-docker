import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverage: true,
  preset: "@shelf/jest-dynamodb",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "js"],
};

export default config;
