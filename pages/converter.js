import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Converter() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.grid}>
        <h1 className={styles.title}>Select your Platform</h1>
        <div className={styles.grid}>
          <Link href="/set_image" >
            <div className={styles.card}>
              Android
            </div>
          </Link>
        <Link href="/under_construction" >
            <div className={styles.card}>
              iOS
            </div>
          </Link>
        <Link href="/under_construction" >
            <div className={styles.card}>
              Web
            </div>
          </Link>
        </div>

      </section>
    </Layout>
  )
}
