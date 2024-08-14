
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_URl: process.env.DB_URl,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY:process.env.JWT_EXPIRY

}