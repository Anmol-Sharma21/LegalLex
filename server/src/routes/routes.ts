import { Router, Request, Response } from "express";
import multer from "multer";
import pdfParse from "pdf-parse";
import fs from 'fs'

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
      let file = req.file;
      console.log(req.file);
      
      if (!file) {
        return res.status(400).json({ error: "No file uploaded." });
      }

      const _file = fs.readFileSync(file.path);

      // Convert base64 string to buffer
      // const buffer = Buffer.from(_file.buffer?.toString("base64"), "base64");

      // Parse PDF from buffer
      const pdfData = await pdfParse(_file, {});

      if (pdfData instanceof Error) {
        console.error("Error parsing PDF:", pdfData.message);
        console.error(pdfData.stack);
        return res.status(500).json({ error: "Error parsing PDF." });
      }

      console.log(`PDF parsed successfully: ${file.originalname}`);

      // Now you can access the parsed PDF data using pdfData.text
      console.log("PDF text:", pdfData.text);

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
