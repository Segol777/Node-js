import express from "express";
import client from 'mongoose'
import dotenv from "dotenv";

dotenv.config();
const url = process.env.MONGO_DB_URL
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const connectToDatabase = async () => {
  try {
    await client.connect(url);
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  try {
    res.status(200).send("Hello from my server!");
  } catch (error) {
    res.status(500).send("Failed to connect");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

connectToDatabase();