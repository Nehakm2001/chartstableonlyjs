
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 5000;

// // Middleware to bring co-ordination between backend and frontend
// app.use(cors());

// const MOCK_DATA = require('./MOCK_DATA.json');

// // Endpoint to get mock data
// app.get('/api/data', (req, res) => {

//     //When your React component makes an HTTP GET request to the backend API endpoint (e.g., http://localhost:5000/api/data), 
//     //the res.json method sends the MOCK_DATA to the React application
//     console.log("Data is being sent");
//     res.json(MOCK_DATA);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const router = express.Router();
const MOCK_DATA = require('./MOCK_DATA.json'); // Adjust path as per your data location

// Route to fetch table data
router.get('/', (req, res) => {
  const tableData = MOCK_DATA.map(item => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    email: item.email,
    gender: item.gender,
    country: item.country,
    phone: item.phone,
    date_of_birth: item.date_of_birth
  }));
  console.log("table data sent")
  res.json(tableData);
});

module.exports = router;
