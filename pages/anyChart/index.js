import Head from "next/head";
import dynamic from "next/dynamic";
const Stock = dynamic(() => import("../../components/AnyChart/Stock"));

const Index = () => {
  return (
    <>
      <Head>
        <script src="https://cdn.anychart.com/csv-data/msft-daily-short.js"></script>
        <script src="https://cdn.anychart.com/csv-data/orcl-daily-short.js"></script>
        <script src="https://cdn.anychart.com/csv-data/csco-daily-short.js"></script>
        <script src="https://cdn.anychart.com/csv-data/ibm-daily-short.js"></script>
      </Head>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Any Chart</h1>
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
            <Stock />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
