import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dirty Carrots</title>
        <link rel="icon" href="/carrot-solid.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Dirty <br />
          Carrots
        </h1>
      </main>
    </div>
  )
}
