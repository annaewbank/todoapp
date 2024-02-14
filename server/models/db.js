const path = require("path");
const dotenv = require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`${process.env.DB_URL}`);

async function auth() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
auth();

module.exports = sequelize;
