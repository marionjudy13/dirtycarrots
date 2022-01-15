import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function HelloWorld() {
    return (
    <Layout>
      <div>
        <Head>
          <title>Hello World! | Dirty Carrots</title>
        </Head>

        <h1>Hello World!</h1>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </div>  
      </Layout>
    )
  }