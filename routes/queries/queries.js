import express from "express";
import fs from "fs";

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = fs.readFileSync('queries.json', 'utf8');
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send("File not found");
  }
});

router.post('/', async (req, res) => {
  try {
    const savedQueryArray = req.body;
    const jsonString = JSON.stringify(savedQueryArray);
    fs.writeFileSync('queries.json', jsonString);
    res.status(200).send("Query array saved");
  } catch (err) {
    res.status(500).send("Failed to save query array");
  }
});

export default router;