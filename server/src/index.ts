import express from "express";
import db from "./database/db";
import { createServer } from "http";
import Routes from "./routes/routes";
import cors from "cors";
import multer from "multer";


const app = express();
const server = createServer(app);
app.use(cors());
app.use("/", Routes);

const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

db();
