const express = require('express');
const router = express.Router();

// Route to fetch chart data
router.get('/', (req, res) => {
    const barchartData = {
        series: [{
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
        },
        {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
        },
        {
            name: 'Year 2000',
            data: [814, 841, 3714, 727, 31]
        },
        {
            name: 'Year 2016',
            data: [1216, 1001, 4436, 738, 40]
        }]
    };

    console.log("bar chart data sent")
    res.json(barchartData);
});

module.exports = router;


