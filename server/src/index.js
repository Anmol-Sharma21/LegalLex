import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ utsav: "Utsav" });
});

server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
