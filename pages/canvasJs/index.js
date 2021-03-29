import dynamic from "next/dynamic";
const CandleStick = dynamic(() =>
  import("../../components/CanvasJs/CandleStick")
);
const OHLC = dynamic(() => import("../../components/CanvasJs/OHLC"));

const Index = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Canvas JS</h1>
          <hr />
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <span className="badge bg-success">Readable Documentation</span>
            </li>
            <li>
              <span className="badge bg-danger">Running in client side</span>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <CandleStick />
          <hr />
          <OHLC />
        </div>
      </div>
    </div>
  );
};

export default Index;
