import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { StateEffect } from "./UseStateeffect";

export const ColumnChart = ({ externalTitle, columndata }) => {


    // const {columndata} = StateEffect();  this is from useeffect.js file

    const options = {
        chart: {
            type: 'column',
            zoomType: 'x'
        },
        credits: {
            text: 'columnchart',
            href: 'google.com'
        },
        title: {
            text: 'Corn vs wheat estimated production for 2023',
            align: 'center'
        },
        subtitle: {
            text:
                'Source: <a target="_blank" ' +
                'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
            align: 'center'
        },
        xAxis: {
            categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
            crosshair: true,
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '1000 metric tons (MT)'
            }
        },
        tooltip: {
            valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
     
        series: columndata.series.map(series => ({
            name: series.name,
            data: series.data
    }))
    };

    return (
        <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
            <h2>{externalTitle}</h2>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};