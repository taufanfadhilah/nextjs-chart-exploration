import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import dataSingleLine from "../../data/highCharts/singleLine.json";
import dataCandleStick from "../../data/highCharts/candleStick.json";

const Index = () => {
  const optionsSingleLine = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: "EP Stock Price",
    },

    series: [
      {
        name: "AW",
        data: dataSingleLine,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
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

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>High Charts</h1>
          <hr />
          <h3>Single Line Series</h3>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsSingleLine}
          />
          <hr />
          <h3>Candle Stick</h3>
          <HighchartsReact
            highcharts={Highcharts}
            options={optionsCandleStick}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
