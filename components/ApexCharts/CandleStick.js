import Chart from "react-apexcharts";

const CandleStick = (props) => {
  const options = {
    candlestick: {
      colors: {
        upward: "#3C90EB",
        downward: "#DF7D46",
      },
      wick: {
        useFillColor: true,
      },
    },
  };
  
  return (
    <>
      <h3>CandleStick</h3>
      <Chart options={options} series={props.data} type="candlestick" width="500" />
    </>
  );
};

export default CandleStick;
