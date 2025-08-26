const app = require("./app");
const { connectDB, sequelize } = require("./config/db");
const { SERVER_PORT } = process.env;

const startServer = async () => {
  await connectDB();

  // Sync models (creates tables if not exist)
  await sequelize.sync({ alter: true });

  app.listen(SERVER_PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${SERVER_PORT}`);
  });
};

startServer();
