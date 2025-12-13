import express from "express";

const configViewEngine = (app) => {
    app.use(express.static("./src/public")); //cau hinh su dung file static
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
    
}

module.exports = configViewEngine;