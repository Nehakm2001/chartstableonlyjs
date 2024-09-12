import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
// import { StateEffect } from './UseStateeffect';


export const PiesChart = ({ externalTitle, piedata }) => {

    // const {piedata} = StateEffect();

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        credits: {
            text: 'piechart',
            href: 'google.com'
        },
        title: {
            text: 'Browser market shares in March, 2022',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: piedata.series.map(series => ({
            name: series.name,
            colorByPoint: series.colorByPoint,
            data: series.data.map(dataPoint => ({
                name: dataPoint.name,
                y: dataPoint.y,
                sliced: dataPoint.sliced || false,
                selected: dataPoint.selected || false
            }))
        }))
    };

    return (
        <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
            <h2>{externalTitle}</h2>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
};



