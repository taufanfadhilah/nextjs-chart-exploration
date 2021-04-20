import React, { useState, useEffect } from "react";

import LineChart from "../../components/Highchart/LineChart"
import VerticalBarChart from "../../components/Highchart/VerticalBarChart"
import MiniChart from "../../components/Highchart/MiniChart"
import StockChart from "../../components/Highchart/StockChart"
import CandleStickStockChart from "../../components/Highchart/CandleStickStockChart"

import dataSingleLine from "../../data/highCharts/singleLine.json";
import dataCandleStick from "../../data/highCharts/candleStick.json";


const Index = ({}) => {

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

          {/* <LineChart data={dataSingleLine} /> */}

          {/* <MiniChart data={dataSingleLine} /> */}

          {/* <VerticalBarChart data={dataVerticalBar} category={categoryVerticalBar} /> */}

          <StockChart data={dataSingleLine} />
          
          <CandleStickStockChart data={dataCandleStick} />

          {/* <h3>Candle Stick</h3>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsCandleStick}
          /> */}
        </div>
      </div>
      <style jsx>{`
      `}</style>
    </div>
  );
};

// Index.getInitialProps = async (ctx) => {
//   let ngrokUrl = "http://9e65834c11af.ngrok.io/"
//   let res = await fetch(ngrokUrl + '/stockPrice?stock_code=0001')
//   let json = await res.json()

//   let res2 = await fetch(ngrokUrl + '/stockPrice/bar')
//   let json2 = await res2.json()
//   return { dataSingleLine: json.data, dataVerticalBar: json2.data.data, categoryVerticalBar: json2.data.categories }
// }

export default Index;
