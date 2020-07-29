import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import { FileUploadContent } from '../components/ImageUploader'
import { useRouter } from 'next/router'

export default function ComputeLayout() {
  const router = useRouter()
  const { image } = router.query
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.grid}>
        <h1 className={styles.title}> Here is your code ! </h1>
        <div className={styles.gridResults}>
            <div className={styles.card}>
                <FileUploadContent content={image}/> 
            </div>
            <div className={styles.card}>
              DSL
            </div>
            <div className={styles.card}>
             Real code
            </div>
        </div>

      </section>
    </Layout>
  )
}