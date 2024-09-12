const express = require('express');
const router = express.Router();


    const getTestData = x => {
        const off = 0.2 + 0.2 * Math.random();
        return new Array(200).fill(1).map(() => [
            x,
            off + (Math.random() - 0.5) * (Math.random() - 0.5)
        ]);
    };

    const scatterchartData = {
        series: [{
            name: 'Run 1',
            data: getTestData(0)
        }, {
            name: 'Run 2',
            data: getTestData(1)
        }, {
            name: 'Run 3',
            data: getTestData(2)
        }, {
            name: 'Run 4',
            data: getTestData(3)
        }, {
            name: 'Run 5',
            data: getTestData(4)
        }]
    };

    router.get('/', (req, res) => {

    console.log("scatter chart data sent")
    res.json(scatterchartData);
});

module.exports = router;


