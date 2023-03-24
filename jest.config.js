//Usando babel jest

// module.exports = {
//   collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
//   testMatch: ["<rootDir>/src/**/*.{js,jsx,mjs,tsx,ts}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs, tsx, ts}"],
//   transform: {
//     "^.+\\.(t|j)sx?$": "ts-jest",
//     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': "<rootDir>/file.img.transformer.ts"
//     // '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
//   },
//   transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
//   "moduleNameMapper": {
//     "^.+\\.(css|less|scss)$": "babel-jest"
// }
// };

module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  testMatch: [
    "<rootDir>/src/**/*.{js,jsx,mjs,tsx,ts}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs, tsx, ts}",
  ],
  transform: {
    "\\.(js|ts|jsx|tsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/file.img.transformer.ts",
     
      //Config alternativa para CSS sin babel-jest

    // '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$","src/assets/*"],
  "moduleNameMapper": {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss)$": "<rootDir>/src/fileMock.js",
  }
};
