import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const VerticalBarChart = ({ data, category }) => {
    const optionsVerticalBarChart = {
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
        },
        xAxis: {
          categories: category,
        },
        legend: {
          enabled: false
        },
        series: [{
          name: 'green',
          color: 'green',
          data: data,
          borderRadius: 1
        }]
      }
    return (
        <div>
            <h3>Vertical Bar Series</h3>
            <HighchartsReact
                highcharts={Highcharts}
                options={optionsVerticalBarChart}
            />
            <hr />
        </div>
    )
}

export default VerticalBarChart