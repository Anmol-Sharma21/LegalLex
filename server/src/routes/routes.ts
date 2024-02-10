import { Router, Request, Response } from "express";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "uploads/" }); // Adjust destination as needed

router.get("/", (req: Request, res: Response) => {
  // Your GET route logic here
  res.send("Hello, this is the root route!");
});

router.post("/upload", upload.single("pdfFile"), (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    // Handle the uploaded file (e.g., save it to disk or process it further)
    // For now, we'll just respond with a success message
    res.json({ message: "File uploaded successfully." });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
