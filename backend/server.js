const app = require("./app");
const connectDatabase = require("./config/database");

const cloudinary = require("cloudinary");

// UnCaught Exception Error - something is not defined but used
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception Error");
  process.exit(1);
});

if(process.env.NODE_ENV!=="PRODUCTION"){
  //local Config file is used if local development, some online sites, give their option for config.env
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting to database
connectDatabase();

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//starting server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
