import Head from 'next/head';
import styles from "./page.module.css"

function MyApp() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.homePage}>
        Rishik Tech
      </div>
    </>
  );
}

export default MyApp;
