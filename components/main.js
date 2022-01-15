import styles from './main.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Main() {
    return (
    <main className={styles.container}>
      <div className={styles.flexbox}>
        <h1 className={utilStyles.h1}>
          Dirty <br />
          Carrots
        </h1>
        <img
          src="/images/carrot-01.jpg" // Route of the image file
          alt="Your Name"
        />
      </div>

      <h2 className={utilStyles.h2}>Just a girl trying to keep a record of all the gosh dang things she's learning.</h2>
    </main>
    )
  }