import Link from 'next/link'

export default function PostList() {
    return (
      <section>
        <div className="content-wrap">
          <h3>The Dirt:</h3>
          <ul>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/hello-world">
                <a>Hello World!</a>
              </Link>
            </li>
          </ul>
        </div>

          <style jsx>
          {`
            section {
              padding: 45px;
            }

            .content-wrap {
              margin: auto;
              max-width: 400px;
            }

            h3 {
              font-size: 1.5em;
            }

            li a {
              font-size: 1.25em;
              line-height: 1.5;
              text-decoration: none;
            }
          `}
          </style>
        </section>
    )
  }