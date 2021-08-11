module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
              "endOfLine": "auto"
            }
          ],
          "react/react-in-jsx-scope": "off",
          "semi": "off",
          "react/prop-types": 0,
          "prefer-const": "off"
    }
};
