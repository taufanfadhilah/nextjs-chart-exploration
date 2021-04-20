import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const CandleStickStockChart = ({ data }) => {
    const options = {
        chart: {
            type: 'candlestick'
        },
        title: {
            text: 'My chart'
        },
        series: [
            {
                data: data,
            }
        ],
        plotOptions: {
            candlestick: {
                color: "#C32A5D",
                lineColor: "C32A5D",
                upColor: "#14B162",
                upLineColor: "#14B162"
            }
        },
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        rangeSelector: {
            allButtonsEnabled: true,
            verticalAlign: 'top',
            buttonPosition: {
                align: 'right'
            },
            inputPosition: {
                align: 'left'
            },
            enabled: true,
            buttonTheme: { // styles for the buttons
                padding: 3,
                style: {
                    color: '#5C5C5C',
                },
                states: {
                    select: {
                        color: '#15A9A9',
                        style: {
                            color: '#15A9A9',
                            fontWeight: 400
                        }
                    }
                    // disabled: { ... }
                }
            },
            buttons: [{
                type: 'week',
                count: 1,
                text: '1W'
            }, {
                type: 'month',
                count: 1,
                text: '1M'
            }, {
                type: 'month',
                count: 6,
                text: '6M'
            }, {
                type: 'year',
                count: 1,
                text: '1Y'
            }, {
                type: 'year',
                count: 3,
                text: '3Y'
            }, {
                type: 'year',
                count: 5,
                text: '5Y'
            }, {
                type: 'all',
                text: 'All'
            }],
            selected: 1
        },
    };

    return (
        <div>
            <h3>Stock Chart</h3>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
            <hr />
        </div>
    )
}

export default CandleStickStockChart