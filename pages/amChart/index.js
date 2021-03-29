import dynamic from "next/dynamic";
const CandleStick = dynamic(() =>
  import("../../components/AmChart/CandleStick")
);

const Index = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Am Chart</h1>
          <hr />
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <span className="badge bg-success">Have many kind of charts</span>
            </li>
            <li>
              <span className="badge bg-success">Realable Documentation</span>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <CandleStick />
        </div>
      </div>
    </div>
  );
};

export default Index;
