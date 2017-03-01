module.exports = {
    "env": {
        "browser": true,
        "node": false
    },
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ],
    "rules": {
        "no-unused-vars": ["off", "always"],
        "space-before-function-paren": ["off"],
        "semi": [2, "always"],
        "comma-spacing": ["off"]
    }
};