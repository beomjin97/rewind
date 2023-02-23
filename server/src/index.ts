import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.send("서버 배포");
});

app.listen(5001, () => {
  console.log("server is running");
});
