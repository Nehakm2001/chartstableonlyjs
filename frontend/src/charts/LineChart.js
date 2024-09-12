import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import { StateEffect } from './UseStateeffect';

const LineChart = ({ externalTitle, linedata }) => {
    
  //  const {linedata} = StateEffect();

    const options = {
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        credits: {
            text: 'linechart',
            href: 'google.com'
         },
        title: {
            text: 'Monthly Average Temperature'
           
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        series: linedata.series.map(series => ({
            name: series.name,
            data: series.data
        }))
    };

    return (
        <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>

{/* HighchartsReact - library from highcharts-react-official package to render Highcharts charts within a React application
    Highcharts library from highcharts package is passed to HighchartsReact giving the necessery functionalities required by HighchartsReact 
    options from line 6 is passed to HighchartsReact  */}

    <h2>{externalTitle}</h2>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default LineChart

