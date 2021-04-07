import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";


import dataSingleLine from "../../data/highCharts/singleLine.json";
import dataCandleStick from "../../data/highCharts/candleStick.json";

const Index = () => {
  const optionsSingleLine = {
    title: {
      text: 'EI Stock'
    },
    chart: {
      type: 'spline',
      backgroundColor:'white',
      plotBorderWidth: null,
      plotShadow: false,
      borderWidth: 0,
      plotBorderWidth: 0,
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
              return Highcharts.dateFormat("%b",this.value)
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
        data: dataSingleLine,
        color: {
          linearGradient: [0, 0, 0, 400],
          stops: [
            [0, "#00b072"],
            [1, "#fcc203"]
          ]
        },
    }]
  };

  const optionsCandleStick = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: "EI Stock Price",
    },

    series: [
      {
        type: "candlestick",
        name: "EI Stock Price",
        data: dataCandleStick,
        dataGrouping: {
          units: [
            [
              "week", // unit name
              [1], // allowed multiples
            ],
            ["month", [1, 2, 3, 4, 6]],
          ],
        },
      },
    ],
  };

  const VerticalBarChart = {
    chart: {
      type: 'bar',
    },
    credits: {
      enabled: false
    },
    yAxis: {
      allowDecimals: false,
      title: {
          text: null
      },
      min: -10,
      max: 10,
    },
    xAxis: {
        categories: ['GN1', 'LS1', 'GN2', 'LS2', 'GN3', 'LS3'],
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'green',
        color:'green',
        data: [5, 6, 4, 2, 1],
        borderRadius: 1
      },{
        name: 'red',
        color:'red',
        data: [-3, -6, -1, -2, -6],
        borderRadius: 1
      }]
  }

  const optionsMiniChart = {
    chart: {
      type: 'spline',
      backgroundColor:'white',
      plotBorderWidth: null,
      marginTop: 0,
      marginBottom: 0,
      marginLeft:0,
      plotShadow: false,
      borderWidth: 0,
      plotBorderWidth: 0,
      marginRight:0,
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
        enabled:false,
        showEmpty:false,
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        showEmpty:false,
        enabled:false
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled:false
    },
    plotOptions: {
        line:{
            lineWidth:1.5,
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
        animation:false,
        name: '',
        allowPointSelect: true,
        data: [Math.random() * 10, Math.random() * 10, Math.random() * 10]            
    }]
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <a href="https://www.highcharts.com/" target="_blank">
            <h1>High Charts</h1>
          </a>
          <span className="badge bg-success">Highly Recommed</span>
          <hr />
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <span className="badge bg-success">Have a React Wrapper</span>
            </li>
            <li>
              <span className="badge bg-success">Used in Market Trends</span>
            </li>
            <li>
              <span className="badge bg-success">Have many kind of charts</span>
            </li>
            <li>
              <span className="badge bg-success">Good Documentation</span>
            </li>
            <li>
              <span className="badge bg-success">Easy to Customize</span>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <h3>Single Line Series</h3>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsSingleLine}
          />
          <hr />
          <h3>Mini Chart</h3>
          <span>
            <span style={{display:"inline-block"}}>
              <div>D05</div>
              <div>DBS Group Holdings</div>
              <div>3.8% 0.990</div>
            </span>
            <span className="mini-container" style={{display:"inline-block"}}>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsMiniChart}
                />
            </span>
          </span>
          <hr/>
          <h3>Vertical Bar Chart</h3>
            <HighchartsReact
              highcharts={Highcharts}
              options={VerticalBarChart}
            />
          <hr/>
          <h3>Candle Stick</h3>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsCandleStick}
          />
          
        </div>
      </div>
      <style jsx>{`
      `}</style>
    </div>
  );
};

export default Index;
