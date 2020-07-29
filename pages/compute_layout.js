import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function ComputeLayout() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1 className={styles.title}>Push play to obtain your code</h1>
        <div className={styles.grid}>
            <div className={styles.card}>
              Image
            </div>
            <div className={styles.card}>
              DSL
            </div>
            <div className={styles.card}>
             Real code
            </div>
        </div>
        <div className={styles.card}>
            PLAY
        </div>

      </section>
    </Layout>
  )
}