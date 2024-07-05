// const express = require('express');
// const axios = require('axios');
const multer = require('multer');
const path = require('path');
// const mongoose = require('mongoose');
const db = require('./db'); // Ensure this file exists and connects to your MongoDB

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const dbURI = 'ongodb://localhost:27017/Recurzive';

// Define a schema for your posts
const postSchema = new mongoose.Schema({
  description: String,
  imagePath: String,
  postTime: Date,
});

// Create a model based on the schema
const Post = mongoose.model('Post', postSchema);

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Define the OpenAI API endpoint and API key
const apiEndpoint = 'https://ai.google.dev/';
const apiKey = 'AIzaSyDlJECPPexfNtI5_UO7w7MEoM0ehLv2LFs'; // Replace with your actual API key

// Route to render the form
app.get("/", (req, res) => {
  res.render("form"); // Renders the form.ejs file
});

// Route to handle form submission for generating text and uploading image
app.post('/generate', upload.single('image'), async (req, res) => {
  const { prompt, postTime } = req.body;
  const imageFile = req.file;

  try {
    // Handling image upload (save to disk or cloud storage)
    const imagePath = imageFile? path.join(__dirname, 'uploads', imageFile.filename) : null;

    // Logging request details
    console.log('Request body:', req.body);
    console.log('Image file:', imageFile);

    // Generating text using OpenAI API
    const response = await axios.post(apiEndpoint, {
      model: 'gpt-3.5-turbo', // Updated model
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    if (!response.data ||!response.data.choices || response.data.choices.length === 0) {
      throw new Error('OpenAI API response is empty or invalid');
    }

    const generatedText = response.data.choices[0].message.content.trim();

    // Save data to MongoDB
    const newPost = new Post({
      description: generatedText,
      imagePath: imagePath,
      postTime: new Date(postTime), // Use the provided schedule time
    });

    await newPost.save();

    // Return generated text, image path (if uploaded), and post time in response
    res.status(200).json({ generatedText, imagePath, postTime: newPost.postTime });
  } catch (error) {
    console.error('Error:', error.message);
    console.error('Error details:', error.response? error.response.data : error);
    res.status(500).json({ error: error.message });
  }
});

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));