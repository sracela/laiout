import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Converter() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Select your Platform</h1>
        <button>Android</button>
        <button>iOS</button>
        <button>Web</button>
      </section>
    </Layout>
  )
}
