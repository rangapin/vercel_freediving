import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Freediving School</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Freediving School</a>
        </h1>

        <p className={styles.description}>
          A comprehensive course on
          <code className={styles.code}>essential Freediving Skills.</code>
        </p>

        <div className={styles.grid}>
          
          <a href="/disciplines/cwt" className={styles.card}>
            <h2>Constant Weight &rarr;</h2>
          </a>

          <a href="/disciplines/static" className={styles.card}>
            <h2>Static &rarr;</h2>
          </a>

          <a
            href="/disciplines/dynamic"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Dynamic &rarr;</h2>
          </a>

          <a href="/disciplines/eq" className={styles.card}>
            <h2>Equalization &rarr;</h2>
          </a>

          <a href="/disciplines/safety" className={styles.card}>
            <h2>Safety &rarr;</h2>
          </a>


        <a href="/disciplines/general" className={styles.card}>
            <h2>General &rarr;</h2>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Copyright 2023 Richard Angapin | All Right Reserved
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
