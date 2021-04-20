import dynamic from "next/dynamic";
const CustomLocale = dynamic(() =>
  import("../../components/TradingViewCharts/CustomLocale"),
  { ssr: false }
);
const VerticalBarChart = dynamic(() =>
  import("../../components/TradingViewCharts/VerticalBarChart"),
  { ssr: false }
);
const ThreeLineLegend = dynamic(() =>
  import("../../components/TradingViewCharts/ThreeLineLegend"),
  { ssr: false }
);
const CandleStick = dynamic(() =>
  import("../../components/TradingViewCharts/CandleStick"),
  { ssr: false }
);
const EmbedChart = dynamic(() =>
  import("../../components/TradingViewCharts/EmbedChart"),
  { ssr: false }
);
const EmbedChartMini = dynamic(() =>
  import("../../components/TradingViewCharts/EmbedChartMini"),
  { ssr: false }
);

import dataSingleLine from "../../data/highCharts/singleLine.json";
import dataCandleStick from "../../data/highCharts/candleStick.json";

const Index = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <a href="https://www.tradingview.com/lightweight-charts/">
            <h1>Trading View Chart</h1>
          </a>
          <hr />
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <span className="badge bg-danger">
                Doesn't have a React Wrapper
              </span>
            </li>
            <li>
              <span className="badge bg-danger">Running in client side</span>
            </li>
            <li>
              <span className="badge bg-danger">
                Have many issues in their Github repo
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <CustomLocale data={dataSingleLine} />
          <hr />
          <h3>Vertical Bar Chart</h3>
          {/* <VerticalBarChart />
           */}
           Lightweight Trading View doesnt support Vertical Bar chart
           <br /><br /><br />
           
          <EmbedChart />
          <hr />
          <EmbedChartMini />
          <h3>More stock chart example</h3>
          <hr />
          <ThreeLineLegend />
          <hr />
          <CandleStick />
          <hr />
        </div>
      </div>
    </div>
  );
};

// Index.getInitialProps = async (ctx) => {
//   let ngrokUrl = "http://9e65834c11af.ngrok.io"
//   let res = await fetch(ngrokUrl + '/stockPrice?stock_code=0001')
//   let json = await res.json()

//   return { dataSingleLine: json.data }
// }

export default Index;
