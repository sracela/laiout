import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function SetIamge() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.grid}>
        <h1 className={styles.title}>Would you...?</h1>
        <div className={styles.grid}>
          <Link href="/upload_image" >
            <div className={styles.card}>
              Upload <br /> an image
            </div>
          </Link>
          
        <h1 className={styles.description}>or</h1>

          <Link href="/select_image" >
            <div className={styles.card}>
              Select <br />  one of ours
            </div>
          </Link>
        </div>

      </section>
    </Layout>
  )
}
