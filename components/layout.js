import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

import NavBackButton from '../components/NavBackButton'

export const siteTitle = 'Pix2code'

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
                    <Link href="/"><a className={styles.logo}>pix2code</a></Link>
                    <img className={styles.hamburguer} src="/images/icons8-hamburguesa-50.png" alt="hamburger" />
                </nav>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>Powered by sracela</p>
                {!home && (
                    <div>
                        {/* <span onClick={() => router.back()}>Previous page</span> */}
                        <NavBackButton />
                    </div>            
                )}
            </footer>
        </div>
    )
    
}
