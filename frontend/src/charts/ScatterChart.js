import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
// import { StateEffect } from './UseStateeffect';


// Make all the colors semi-transparent so we can see overlapping dots
//this was in highchart.com data only
const colors = Highcharts.getOptions().colors.map(color =>
    Highcharts.color(color).setOpacity(0.5).get()
);

export const ScatterChart = ({ externalTitle,scatterdatainchartjsfile }) => {

    // const {scatterdata} = StateEffect();


    const options = {
        chart: {
            type: 'scatter'
        },

        colors,

        credits: {
            text: 'scatterchart',
            href: 'google.com'
        },
        title: {
            text: 'Scatter chart with jitter'
        },

        xAxis: {
            categories: ['Run 1', 'Run 2', 'Run 3', 'Run 4', 'Run 5']
        },

        yAxis: {
            title: {
                text: 'Measurements'
            }
        },

        plotOptions: {
            scatter: {
                showInLegend: false,
                jitter: {
                    x: 0.24,
                    y: 0
                },
                marker: {
                    radius: 2,
                    symbol: 'circle'
                },
                tooltip: {
                    pointFormat: 'Measurement: {point.y:.3f}'
                }
            }
        },
        series: scatterdatainchartjsfile.series.map(series => ({
            name: series.name,
            data: series.data
        }))
    }

    return(
        <div style = {{ width: '400px', height: '400px', margin: '0 auto' }} >
            <h2>{externalTitle}</h2>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div >
        )
};



