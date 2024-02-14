const express = require('express');
const app = express();
const quizRoutes = require('../routes/quizroute');
const cors = require('cors');
// Define a simple route

app.use(cors());
app.use(express.json())
app.use('/api', quizRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});