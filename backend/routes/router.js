const express = require('express');
const cors = require('cors');

const tableRoute = require('../tabels/tableback');
const areachartRoute = require('../charts/AreaChartback');
const barchartRoute = require('../charts/BarChartback')
const columnchartRoute = require('../charts/ColumnChartback')
const linechartRoute = require('../charts/LineChartback')
const piechartRoute = require('../charts/PiesChartback')
const scatterchartRoute = require('../charts/ScatterChartback')

const app = express();
const PORT = 5000;

//middleware to interact with the frontend
app.use(cors());

//giving url to the routes
app.use('/api/tableData', tableRoute);
app.use('/api/areachartData', areachartRoute);
app.use('/api/barchartData', barchartRoute)
app.use('/api/columnchartData', columnchartRoute)
app.use('/api/linechartData', linechartRoute)
app.use('/api/piechartData', piechartRoute)
app.use('/api/scatterchartData', scatterchartRoute)



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
