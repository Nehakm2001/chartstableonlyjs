import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export const AreaChart = ({ externalTitle, areadata }) => {
  const options = {
    chart: {
      type: 'area',
      zoomType: 'x'
    },
    credits: {
      text: 'areachart',
      href: 'google.com'
    },
    title: {
      text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
      text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
        'target="_blank">FAS</a>'
    },
    xAxis: {
      allowDecimals: false,
      accessibility: {
        rangeDescription: 'Range: 1940 to 2024.'
      }
    },
    yAxis: {
      title: {
        text: 'Nuclear weapon states'
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>' +
        'warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: areadata.series.map(series => ({
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




