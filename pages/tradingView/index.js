import dynamic from "next/dynamic";
const CustomLocale = dynamic(() =>
  import("../../components/TradingViewCharts/CustomLocale")
);
const ThreeLineLegend = dynamic(() =>
  import("../../components/TradingViewCharts/ThreeLineLegend")
);

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
          <CustomLocale />
          <hr />
          <ThreeLineLegend />
        </div>
      </div>
    </div>
  );
};

export default Index;
