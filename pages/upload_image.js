import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import ImageUploader from '../components/ImageUploader'
import styles from '../styles/Home.module.css'

export default function Upload_Image() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <h1 className={styles.title}>Upload an image</h1>
          <Link href="/compute_layout" >
          <div className={styles.card}>
              <a>Upload an image</a>
          </div>
        </Link>
          {/* <ImageUploader /> */}
        </section>
      </Layout>
    )
  }