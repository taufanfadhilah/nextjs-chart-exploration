import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const data = [
    { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
    { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
    { time: '2018-12-21', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
    { time: '2018-12-22', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
    { time: '2018-12-23', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
    { time: '2018-12-24', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
    { time: '2018-12-25', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
];

const VerticalBarChart = () => {
  const chartRef = useRef();
  useEffect(() => {
    const chart = createChart(chartRef.current, { width: 500, height: 400 });
    const barSeries = chart.addBarSeries();
    barSeries.setData(data);
    chart.timeScale().fitContent();
  }, []);
  return (
    <div>
      <h3>Vertical Bar Chart</h3>
      <div ref={chartRef} />
    </div>
  );
};

export default VerticalBarChart;
