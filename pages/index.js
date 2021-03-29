import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Chart <a href="/">Exploration!</a>
        </h1>
        <p className={styles.description}>
          Exploring charts that can be used in
          <code className={styles.code}>Next.js</code>
        </p>
        <div className={styles.grid}>
          <Link href="/tradingView">
            <div className={styles.card}>
              <h3>Trading View Charts &rarr;</h3>
              <p>Lightweight Financial Charting</p>
            </div>
          </Link>

          <Link href="/highChart">
            <div className={styles.card}>
              <h3>High Charts &rarr;</h3>
              <p>Make your data come alive</p>
            </div>
          </Link>

          <Link href="/canvasJs">
            <div className={styles.card}>
              <h3>Canvas Js &rarr;</h3>
              <p>Beautiful HTML5 Charts & Graphs</p>
            </div>
          </Link>

          <Link href="/anyChart">
            <div className={styles.card}>
              <h3>Any Chart &rarr;</h3>
              <p>
                High-performance JavaScript stock, financial, and other
                time-series charts for web, desktop, and mobile apps
              </p>
            </div>
          </Link>

          <Link href="/apexCharts">
            <div className={styles.card}>
              <h3>Apex Charts &rarr;</h3>
              <p>Modern & Interactive Open-source Charts</p>
            </div>
          </Link>

          <Link href="/amChart">
            <div className={styles.card}>
              <h3>AMChart &rarr;</h3>
              <p>Programming library for all your data visualization needs.</p>
            </div>
          </Link>
        </div>
        <p className={styles.description}>
          <a href="https://github.com/taufanfadhilah/nextjs-chart-exploration#learn-more">
            Get the source code here!
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
