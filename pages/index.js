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
      <section>
        <h1 className={styles.title}>L.AI.OUT</h1>
          <Link href="/converter" >
        <div className={styles.card}>
              <a>Get Started</a>
        </div>
        </Link>
        <p className={styles.description}>
          Small but powerful
        </p>
      </section>
    </Layout>
  )
}
