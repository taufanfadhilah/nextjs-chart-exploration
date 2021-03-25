import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
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
        </div>
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
