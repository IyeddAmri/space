const express = require('express');
const app = express();

const education=require('../routes/education.js')

// Define a simple route




const quizRoutes = require('../routes/quizroute');
const factsroute = require("../routes/factsroute")
const cors = require('cors');
// Define a simple route

app.use(cors());
app.use(express.json())
app.use('/api', quizRoutes);
app.use("/facts",factsroute)



const PORT = process.env.PORT || 4000;
app.use("/edu",education)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});