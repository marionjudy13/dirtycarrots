import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dirty Carrots</title>
        <link rel="icon" href="/carrot-solid.svg" />
      </Head>

      <div className={styles.layout}>

        <main className={styles.main}>
          <div className={styles.header}>
            <Image
              src="/images/carrot.jpg" // Route of the image file
              height={140} // Desired size with correct aspect ratio
              width={140} // Desired size with correct aspect ratio
              alt="Your Name"
              className={styles.img}
            />
            <h1 className={styles.title}>
              Dirty <br />
              Carrots
            </h1>
          </div>
          <h2 className={styles.h2}>Just a girl trying to keep a record of all the gosh damn things she's learning.</h2>
        </main>

        <section className={styles.postLists}>
          <h3 className={styles.h3}>The Dirt:</h3>
          <ul>
            <li>
              <Link href="/posts/hello-world">
                <a>Talking About Tech Stacks</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Talking About Tech Stacks</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Talking About Tech Stacks</a>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
