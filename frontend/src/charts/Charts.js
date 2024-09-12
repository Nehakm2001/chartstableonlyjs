import React, { useEffect, useState } from 'react';
import LineChart from './LineChart';
import { BarChart } from './BarChart';
import './charts.css';
import { ColumnChart } from './ColumnChart';
import { AreaChart } from './AreaChart';
import { ScatterChart } from './ScatterChart';
import { PiesChart } from './PiesChart';
import axios from 'axios';


const Charts = () => {

    const [areadata, setAreaData] = useState({ series: [] });

    useEffect(() => {
        axios.get('http://localhost:5000/api/areachartData')
            .then(arearesponse => {
                console.log('Area Data fetched from backend:', arearesponse.data);
                setAreaData(arearesponse.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                console.log("fetching data for area chart is completed");
            })
    }, []);

    //await, waits for the promise to get complete 
    const [bardata, setBarData] = useState({ series: [] });

    const fetchChartData = async () => {
        const barResponse = await axios.get('http://localhost:5000/api/barchartData');
        console.log('Bar Data fetched from backend:', barResponse.data);
        setBarData(barResponse.data);
    }
    useEffect(() => {
        fetchChartData()
    }, [])


    const [columndata, setColumnData] = useState({ series: [] });

    useEffect(() => {
            const columnfetch = async () => {
                try {
                    const columnResponse = await axios.get('http://localhost:5000/api/barchartData');
                    console.log('Column Data fetched from backend:', columnResponse.data);
                    setColumnData(columnResponse.data);   //assigning fetched data from backend to the columndata by setColumnData
                } catch (error) {
                    console.log('Error fetching column data:', error)
                } finally {
                    console.log("fetching data for column chart is completed")
                }
            }
            columnfetch();
    }, [])

    const [linedata, setLineData] = useState({ series: [] });

    const linefetch = async() => {
        await axios.get('http://localhost:5000/api/linechartData')
        .then(lineresponse => {
            console.log('Line Data fetched from backend:', lineresponse.data);
            setLineData(lineresponse.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
        .finally(() => {
            console.log("fetching data for line chart is completed");
        })
    }
    useEffect(() => {
           linefetch();
        }, []);


    const [piedata, setPieData] = useState({ series: [] });

    useEffect(() => {
        const piefetch = async() => {
            try {
                const pieResponse = await axios.get('http://localhost:5000/api/piechartData');
                console.log('Pie Data fetched from backend:', pieResponse.data);
                setPieData(pieResponse.data);
            } catch (error) {
                console.log('Error fetching pie chart data:', error)
            } finally {
                console.log("fetching data for pie chart is completed")
            }
        }
        piefetch();
    }, [])

    const [scatterdata, setScatterData] = useState({ series: [] });

    const scatterfetchchart = async () => {
        try {
            const scatterResponse = await axios.get('http://localhost:5000/api/scatterchartData');
            console.log('Scatter Data fetched from backend:', scatterResponse.data);
            setScatterData(scatterResponse.data);
        } catch (error) {
            console.log('Error fetching scatter chart data:', error)
        } finally {
            console.log("fetching data for scatter chart is completed")
        }
    }

    useEffect(() => {
        scatterfetchchart();
    }, [])


    return (

        <div className='complete'>
            <div className='charts'>
                <h1>High Charts</h1>
            </div>

            <div className='linebar'>
                <LineChart externalTitle="Line Chart" linedata={linedata} />
                <BarChart externalTitle="Bar Chart" bardata={bardata} />
                <ColumnChart externalTitle="Column Chart" columndata={columndata} />
            </div>

            <div className='area'>
                <AreaChart externalTitle="Area Chart" areadata={areadata} />
                <ScatterChart externalTitle="Scatter Chart" scatterdatainchartjsfile={scatterdata} />
                <PiesChart externalTitle="Pie Chart" piedata={piedata}/>
            </div>

        </div>
    )
}

export default Charts;