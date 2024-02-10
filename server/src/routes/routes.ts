// src/routes/routes.ts
import { Router, Request, Response } from "express";
import multer from "multer";
import pdfParse from "pdf-parse";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is the root route!");
});

router.post(
  "/upload",
  upload.single("pdfFile"),
  async (req: Request, res: Response) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ error: "No file uploaded." });
      }

      const dataBuffer = await pdfParse({
        content: Buffer.from(file.buffer).toString("base64"),
      } as pdfParse.DataBuffer);

      if (dataBuffer instanceof Error) {
        console.error("Error parsing PDF:", dataBuffer.message);
        console.error(dataBuffer.stack);
        return res.status(500).json({ error: "Error parsing PDF." });
      }

      console.log(`PDF parsed successfully: ${file.originalname}`);

      // Handle the uploaded file (e.g., save it to disk or process it further)
      // For now, we'll just respond with a success message
      res.json({ success: true, message: "File uploaded successfully." });
    } catch (error: any) {
      if (error instanceof Error) {
        console.error("Error handling file upload:", error.message);
        console.error(error.stack);
        res.status(500).json({ error: "Internal server error." });
      } else {
        // If the error is not an instance of Error, handle it accordingly
        console.error("Unexpected error type:", error);
        res.status(500).json({ error: "Internal server error." });
      }
    }
  }
);

export default router;
