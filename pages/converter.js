import Head from 'next/head'
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
        <div className={styles.card}>
        Android
        </div>
        <div className={styles.card}>
        iOS
        </div>
        <div className={styles.card}>
        Web
        </div>
      </section>
      {/* <section>
        <h1>Select your Platform</h1>
        <button>Android</button>
        <button>iOS</button>
        <button>Web</button>
      </section> */}
    </Layout>
  )
}
