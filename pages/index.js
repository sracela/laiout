import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.grid}>
        <h1 className={styles.title}>PIX2CODE</h1>
        <div className={styles.card}>
          <Link href="/converter" >
              <a>Get Started</a>
          </Link>
        </div>
        <p className={styles.description}>
          Small but powerful
        </p>
      </section>
    </Layout>
  )
}
