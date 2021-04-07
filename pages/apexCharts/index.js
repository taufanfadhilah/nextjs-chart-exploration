import dynamic from "next/dynamic";
const CandleStick = dynamic(() =>
  import("../../components/ApexCharts/CandleStick"),
  { ssr: false }
);
const Line = dynamic(() => 
  import("../../components/ApexCharts/Line"),
  { ssr: false }
);

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://any-api.com:8443/http://xkcd.com/info.0.json`)
  const data = await res.json()
  // server side data fetch example
  const series = [
    {
      data: [
        [1538856000000, 6593.34, 6600, 6582.63, 6600],
        [1538856900000, 6595.16, 6604.76, 6590.73, 6593.86],
      ],
    },
  ];
  console.log("series server side")
  // Pass data to the page via props
  return { props: { data: series } }
}

const Index = ({data}) => {
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
          <CandleStick data={data}/>
          <hr />
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Index;
