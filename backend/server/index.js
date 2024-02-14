const express = require('express');
const app = express();
const education=require('../routes/education.js')
// Define a simple route


// Define more routes as needed

const PORT = process.env.PORT || 5000;
app.use("/edu",education)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});