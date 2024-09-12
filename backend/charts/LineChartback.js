const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const linechartData = {
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]
        },
        {
            name: 'America',
            data: [10, 6, 9, 15, 25, 19]
        },
        {

            name: 'India',
            data: [15, 9, 15, 25, 20, 19]
            ,
        }

        ]
    };

    console.log("line chart data sent")
    res.json(linechartData);
});

module.exports = router;


