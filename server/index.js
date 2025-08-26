// app.js

const express = require("express");
const cors = require("cors");

const app = express();

// Allow multiple frontend URLs
const allowedOrigins = [
  "https://task-management-system-beta-orpin.vercel.app",
  "https://task-management-system-flax.vercel.app"
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like Postman)
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1){
      const msg = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

// Your routes here
// app.use("/api/auth", authRoutes);

module.exports = app;
