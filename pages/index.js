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

      <div className="wrapper">
        <Main />
        <PostList />
        <section>
          <div className="contact">
            <div className="contact-wrap">
                <a href="mailto: marion@spiderwebs.dev">Send me a Note.</a>
                <div className="socials">
                  Socials
                </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .wrapper {
          display: block;
          width: 100%;
        }

        .contact {
          display: none;
        }

        @media (min-width: 769px) {
          .wrapper {
            display: flex;
            flex-wrap: wrap;
            height: 90vh;
            align-items: center;
          }

          section {
            width: 100%;
            height: 10vh;
            display: flex;
          }

          .contact {
            width: 60%;
            display: flex;
            height: 10vh;
          }

          .contact-wrap {
            width: 60%;
            display: flex;
            height: 10vh;
            align-items: center;
            max-width: 450px;
            margin: auto;
            color: var(--green);
          }

          .contact-wrap a {
            text-decoration: none;
            margin-right: 40px;
          }
        }
      `}</style>
    </Layout>
  )
}
