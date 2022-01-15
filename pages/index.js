import Head from 'next/head'
import Layout from '../components/layout'
import Main from '../components/main'
import PostList from '../components/post-list'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dirty Carrots</title>
        <link rel="icon" href="/carrot-ico.svg" />
      </Head>

      <div>
        <Main />
        <PostList />
      </div>
    </Layout>
  )
}
