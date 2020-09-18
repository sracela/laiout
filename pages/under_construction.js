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
          <Link href="/" >
        <div className={styles.card}>
              <a>Back home</a>
        </div>
        </Link>
        <div>
        <p className={styles.descriptionStatic}>
          Page under construction!
        </p>
        </div>

      </section>
    </Layout>
  )
}
