import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/ComputeLayout.module.css'
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
        <h1 className={styles.title}>Here is your code !</h1>
        <div className={styles.resultsContainer}>
            <div className={styles.resultCard}>
                Image
                <FileUploadContent content={image}/> 
            </div>
            <div className={styles.resultCard}>
              DSL
              <p className={styles.code}>ldjaskdjlaskdjlsa djksdjalkjd djksdlasjd</p>
            </div>
            <div className={styles.resultCard}>
             Real code
              <p className={styles.code}>ldjaskdjlaskdjlsa djksdjalkjd djksdlasjd</p>
            </div>
        </div>

      </section>
    </Layout>
  )
}