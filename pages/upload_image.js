import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ImageUploader from '../components/ImageUploader'
import ImageSelector from '../components/ImageSelector'
import styles from '../styles/Home.module.css'

export default function Upload_Image() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={styles.grid}>
          <h1 className={styles.title}>Upload an image or try with one of ours</h1>
          <ImageUploader />
          <ImageSelector />
        </section>
      </Layout>
    )
  }