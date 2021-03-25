import dynamic from "next/dynamic";
const CandleStick = dynamic(() =>
  import("../../components/ApexCharts/CandleStick")
);
const Line = dynamic(() => import("../../components/ApexCharts/Line"));

const Index = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Apex Chart</h1>
          <hr />
          <CandleStick />
          <hr />
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Index;
