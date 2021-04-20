
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { AiOutlineArrowDown } from 'react-icons/ai';

const MiniChart = ({ data }) => {

    const optionsMiniChart = {
        chart: {
            type: 'spline',
            backgroundColor: 'white',
            plotBorderWidth: null,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            plotShadow: false,
            borderWidth: 0,
            plotBorderWidth: 0,
            marginRight: 0,
            width: 140,
            height: 85
        },
        tooltip: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            enabled: false,
            showEmpty: false,
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            showEmpty: false,
            enabled: false
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            line: {
                lineWidth: 1.5,
            },
            showInLegend: false,
            tooltip: {}
        },
        series: [{
            marker: {
                enabled: false
            },
            color: {
                linearGradient: [0, 0, 0, 100],
                stops: [
                    [0, "#fcc203"],
                    [1, "#00b072"]
                ]
            },
            animation: false,
            name: '',
            allowPointSelect: true,
            data: [Math.random() * 10, Math.random() * 10, Math.random() * 10]
        }]
    }
    return (
        <div>
            <h3>Mini Chart</h3>
            <span>
                <span className="text-red-500" style={{ display: "inline-block" }}>
                    <div className="font-bold">D05</div>
                    <div>DBS GROUP HOLDINGS</div>
                    <div className="text-red-500"><AiOutlineArrowDown color="red" />
                        <span className="text-base text-red-500">3.8 %</span> 
                        <span className="text-sm text-red-500">0.990</span>
                    </div>
                </span>
                <span className="mini-container" style={{ display: "inline-block" }}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={optionsMiniChart}
                    />
                </span>
            </span>
            <hr />
        </div>
    )
}

export default MiniChart