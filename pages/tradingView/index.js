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
          <h1>Trading View Chart</h1>
          <hr />
          <CustomLocale />
          <hr />
          <ThreeLineLegend />
        </div>
      </div>
    </div>
  );
};

export default Index;
