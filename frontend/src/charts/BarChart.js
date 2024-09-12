import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export const BarChart = ({externalTitle, bardata}) => {

    const options = {
        chart: {
            type: 'bar',
            zoomType: 'x'
        },
        credits: {
            text: 'barchart',
            href: 'google.com'
         },
        title: {
            text: 'Historic World Population by Region'
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        series: bardata.series.map(series => ({
            name: series.name,
            data: series.data
    }))
    };

    return(
        <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
            <h2>{externalTitle}</h2>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        )
};



