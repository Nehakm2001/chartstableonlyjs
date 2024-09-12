const express = require('express');
const router = express.Router();

// Route to fetch chart data
router.get('/', (req, res) => {
    const columnchartData = {
        series: [
            {
                name: 'Corn',
                data: [387749, 280000, 129000, 64300, 54000, 34300]
            },
            {
                name: 'Wheat',
                data: [45321, 140000, 10000, 140500, 19500, 113500]
            }
        ]
    };

    console.log("column chart data sent")
    res.json(columnchartData);
});

module.exports = router;


