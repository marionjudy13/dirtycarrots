import Link from 'next/link'

export default function PostList() {
    return (
      <section>
          <h3>The Dirt:</h3>
          <ul>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
          </ul>

          <style jsx>
          {`
            section {
              margin: auto;
              max-width: 347px;
              padding: 30px 40px 0;
            }

            h3 {
              font-size: 1.5em;
            }

            li a {
              font-size: 1.25em;
              text-decoration: none;
            }
          `}
          </style>
        </section>
    )
  }