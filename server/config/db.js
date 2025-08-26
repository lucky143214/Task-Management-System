// config/db.js

const { Sequelize } = require("sequelize");
require("dotenv").config();

// Use DATABASE_URL from Railway, or fallback to local DB for development
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "mysql://root:password@localhost:3306/task_management_system_test",
  {
    dialect: "mysql",
    logging: false, // set to true if you want to see SQL queries
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to Railway MySQL!");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
