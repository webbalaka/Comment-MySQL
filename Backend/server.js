import PORT from "./src/config/config.js";
import app from "./app.js"
import express from "express";


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend Server ready at http://localhost:${PORT}`);
  });
  