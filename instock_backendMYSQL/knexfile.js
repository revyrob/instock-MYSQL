const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: process.env.DB_LOCAL_DBNAME,
    user: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASSWORD,
    charset: "utf8",
  },
};
