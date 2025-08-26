// index.js

const app = require("./app");
const { connectDB, sequelize } = require("./config/db");

// Use SERVER_PORT from env or fallback to 5100
const SERVER_PORT = process.env.SERVER_PORT || 5100;

const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Sync models (creates tables if not exist)
    await sequelize.sync({ alter: true });

    // Start server
    app.listen(SERVER_PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${SERVER_PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
