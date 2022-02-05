import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
    return  (
        <>
            <div className={styles.container}>
                {children}

                <style jsx>{`
                    margin: 40px auto;
                    display: flex;
                    justify-content: center;
                `}</style>
            </div>
        </>
    )
}