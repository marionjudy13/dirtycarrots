import Link from 'next/link'
import styles from './post-list.module.css'
import utilStyles from '../styles/utils.module.css'

export default function PostList() {
    return (
      <section className={styles.postLists}>
          <h3 className={utilStyles.h3}>The Dirt:</h3>
          <ul>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
          </ul>
        </section>
    )
  }