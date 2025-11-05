// server.js

import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
