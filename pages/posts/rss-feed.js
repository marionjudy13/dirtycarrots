import Head from 'next/head'
import Layout from '../../components/layout'

export default function HelloWorld() {
    return (
    <Layout>
      <div>
        <Head>
          <title>Adding an RSS Feed! | Dirty Carrots</title>
        </Head>

        <h1>Adding an RSS Feed!</h1>
        <section>
          <p>Really Simple Syndication (RSS)</p>
          <p>Here's what I think I need to do to add a weather component based on the user's location:
              <ol>
                  <li>Determine the location of the user.</li>
                  <li>Get the user's weather information from the weather RSS feed.</li>
                  <li>Parse the information so I can grab only the data I want.</li>
                  <li>Put that data in my weather component.</li>
                  <li>Repeat daily or everytime a user loads the page?</li>
              </ol>
          </p>
          <h3>Resources</h3>
          <ul>
              <li>https://ashleemboyer.com/blog/how-i-added-an-rss-feed-to-my-nextjs-site</li>
              <li>https://validator.w3.org/feed/</li>
              <li>https://github.com/sweeneyapps/html2rssfeed</li>
          </ul>
        </section>
      </div>  
    </Layout>
    )
  }