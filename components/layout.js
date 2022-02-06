import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
    return  (
        <>
            <div className={styles.container}>
                {children}

                <style jsx>{`
                    display: flex;
                    justify-content: center;
                    margin: 0 auto;
                `}</style>
            </div>
        </>
    )
}