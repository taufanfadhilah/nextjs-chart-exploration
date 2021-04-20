import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const LineChart = ({ data }) => {
    const optionsSingleLine = {
        title: {
            text: 'EI Stock'
        },
        chart: {
            type: 'spline',
            backgroundColor: 'white',
            plotBorderWidth: null,
            plotShadow: false,
            borderWidth: 0,
            plotBorderWidth: 0,
            zoomType: "xy",
            panKey: "ctrl",
            panning: true,
            followTouchMove: false
        },
        legend: {
            enabled: false
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: "white",
            shadow: true,
            formatter: function () {
                return `<div style="text-align: center">
            <div>${new Date(this.x)}</div><br/>
            <div>${this.y}</div></div>`;
            }
        },
        xAxis: {
            type: 'datetime',
            //tickInterval: 2592000000*2,
            // tickWidth: 1,
            gridLineWidth: 0,
            labels: {
                //rotation: -45,
                align: 'center',
                formatter: function () {
                    return Highcharts.dateFormat("%b", this.value)
                }
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            opposite: true,
            tickInterval: 15
        },
        series: [{
            name: 'AAPL',
            data: data,
            color: {
                linearGradient: [0, 0, 0, 400],
                stops: [
                    [0, "#00b072"],
                    [1, "#fcc203"]
                ]
            },
        }]
    };
    return (
        <div>
            <h3>Single Line Series</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={optionsSingleLine}
            />
            <hr />
        </div>
    )
}

export default LineChart