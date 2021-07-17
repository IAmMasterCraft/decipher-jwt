const { decipherToken } = require("../package");

const decipherJwt = (tokenString) => decipherToken(tokenString);

module.exports = { decipherJwt: decipherJwt}