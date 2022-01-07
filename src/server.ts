import express from "express";

const app = express();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>
  console.log(`🚀 Server has started at http://localhost:${PORT}`)
);
