//create backend js file for chart in backend/charts/
//add it in routes/router.js
//edit js file in frontend (add useEffect, useState, map data from backend to frontend)

const express = require('express');
const router = express.Router();

    
    const piechartData = {
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 74.77,
                sliced: true,
                selected: true
            },  {
                name: 'Edge',
                y: 12.82
            },  {
                name: 'Firefox',
                y: 4.63
            }, {
                name: 'Safari',
                y: 2.44
            }, {
                name: 'Internet Explorer',
                y: 2.02
            }, {
                name: 'Other',
                y: 3.28
            }]
        }]
    };

    
    router.get('/', (req, res) => {
    console.log("pie chart data sent")
    res.json(piechartData);
});

module.exports = router;


