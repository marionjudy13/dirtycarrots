import styles from '../styles/layout.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
    return  (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {children}
                    <Link href="/">
                        <a>Back Home</a>
                    </Link>
                </div>
            </div>
        </>
    )
}