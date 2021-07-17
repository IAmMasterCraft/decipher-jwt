const { decipherToken } = require("../package");

const decipherJwt = (tokenString) => decipherToken(tokenString);

console.log(decipherJwt("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJib2x1LmFraW5zZWZ1bm1pQGdtYWlsLmNvbSIsImZpcnN0bmFtZSI6IkRhbWlsb2xhIiwibGFzdG5hbWUiOiJBZGVyaWJpZ2JlIiwibW9iaWxlIjoiMDgxMzY4CJpYXQiOjE2MjY1NDI1NTAsImV4cCI6MTYyNjU0NDM1MH0.v9zYtI7RNyf21JdbGIFzqWAkdU0XPKo1JlWAr7kaPJA"))

module.exports = { decipherJwt: decipherJwt}