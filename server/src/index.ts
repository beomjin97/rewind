import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.send("서버 배포");
});

app.listen(5001, () => {
  console.log("server is running");
});
