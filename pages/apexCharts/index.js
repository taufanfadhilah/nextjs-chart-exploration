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
          <span className="badge bg-success">Recommed</span>
          <hr />
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <span className="badge bg-success">Free - Open Source</span>
            </li>
            <li>
              <span className="badge bg-success">Have a React Wrapper</span>
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
            <li>
              <span className="badge bg-success">Good Animation on Hover</span>
            </li>
            <li>
              <span className="badge bg-danger">Website is slow</span>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <CandleStick />
          <hr />
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Index;
