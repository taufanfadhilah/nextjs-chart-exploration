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
          <CandleStick />
        </div>
      </div>
    </div>
  );
};

export default Index;
