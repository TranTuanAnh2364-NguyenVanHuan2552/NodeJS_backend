import express from "express";

import bodyParser from "body-parser";

import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configViewEngine(app);
initWebRoutes(app);
//listen port
app.listen(PORT, () => {
    console.log("Backend nodejs is running on the port: " + PORT);
});
app.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Change PORT or stop the other process.`);
    process.exit(1);
  }
  console.error(err);
});

module.exports = app;
