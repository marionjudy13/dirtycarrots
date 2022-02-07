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
              height: 90vh;
            }

            @media (min-width: 769px) {
              section {
                border-bottom: 2px solid var(--green);
                width: 40%;
                display: flex;
                align-items: center;
                padding-left: 35px;
              }
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