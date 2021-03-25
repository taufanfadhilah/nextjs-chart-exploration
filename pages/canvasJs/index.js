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
          <CandleStick />
          <hr />
          <OHLC />
        </div>
      </div>
    </div>
  );
};

export default Index;
