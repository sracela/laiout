import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Pix2code</h1>
        <div style={{background: 'green'}}>
          <Link href="/converter" >
              <a>Get Started</a>
          </Link>
        </div>
        <p>
          Small but powerful
        </p>
      </section>
    </Layout>
  )
}
