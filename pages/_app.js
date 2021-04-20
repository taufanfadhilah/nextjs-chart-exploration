import Head from "next/head";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "tailwindcss/tailwind.css"

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chart Exploration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script src="https://code.highcharts.com/stock/highstock.js"></script>
        <script src="https://code.highcharts.com/stock/modules/data.js"></script>
        <script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/stock/modules/export-data.js"></script>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
