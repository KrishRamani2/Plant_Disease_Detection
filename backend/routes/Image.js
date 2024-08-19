const express = require('express');
const router = express.Router();
const Image = require("../models/image");

// Add Images
router.post('/images', async (req, res) => {
  const newImage = new Image(req.body);
  try {
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ message: "Failed to add image", error });
  }
});

// Get Images
router.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve images", error });
  }
});

module.exports = router;
