const mongoose = require("mongoose");

const uri = "mongodb+srv://LegalLex_htf:" + encodeURIComponent("legallex@12345") + "@cluster0.xrhjdp0.mongodb.net/LegalLex";

async function connect() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

export default connect;