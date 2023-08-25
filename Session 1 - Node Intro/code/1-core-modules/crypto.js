const crypto = require("crypto");
const buffer = crypto.randomBytes(16);
const randomString = buffer.toString("hex");
console.log(randomString);