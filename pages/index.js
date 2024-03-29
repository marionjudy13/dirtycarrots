import Head from 'next/head'
import Main from '../components/main'
import PostList from '../components/post-list'
import ContactBar from '../components/contact-bar'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Dirty Carrots</title>
        <link rel="icon" href="/carrot-ico.svg" />
      </Head>

      <div className="wrapper">
        <Main />
        <PostList posts={allPostsData} />
        <ContactBar />
      </div>
      <style jsx>{`
        .wrapper {
          display: block;
          width: 100%;
        }

        @media (min-width: 769px) {
          .wrapper {
            display: flex;
            flex-wrap: wrap;
            height: 90vh;
            align-items: center;
          }
        }
      `}</style>
    </>
  )
}
