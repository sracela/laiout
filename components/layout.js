import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

import NavBackButton from '../components/NavBackButton'

export const siteTitle = 'l.ai.out'   

const isServer = typeof window === "undefined";

export default function Layout({ children, home }) {

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Convert GUI screenshots into code"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header>
                <nav className={styles.nav}>
                    <Link href="/"><div><p className={styles.logo}><a >l.ai.out</a></p></div></Link>
                    <img className={styles.hamburguer} src="/images/icons8-hamburguesa-50.png" alt="hamburger" />
                </nav>
            </header>
            <main className={styles.main}>
            {children}
            {/* {!isServer &&               
                <React.Suspense fallback={<h1>Loading profile...</h1>}>
                                     {children}
                </React.Suspense>} */}
            </main>
            <footer className={styles.footer}>
                <p>Powered by <a className={styles.portfolio} href="https://www.sracela.com/" target="_blank" rel="noopener">sracela</a></p>
                {!home && (
                    <div>
                        <NavBackButton />
                    </div>            
                )}
            </footer>
        </div>
    )
    
}
