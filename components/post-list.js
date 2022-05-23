import Link from 'next/link'

export default function PostList({posts}) {
    return (
      <section>
        <div className="content-wrap">
          <h3>Dem Carrots:</h3>
          <ul>
            {posts.map(({ id, title }) => (
              <li key={id}>
                {console.log(id)}
                  <Link href={`/posts/${id}`}>
                    {title}
                  </Link>
              </li>
            ))}
          </ul>
        </div>

          <style jsx>
          {`
            section {
              padding: 40px;
              max-height: 400px;
              overflow: scroll;
              overflow-x: hidden; 
            }

            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background: var(--white);
            }

            ::-webkit-scrollbar-thumb {
              background: var(--green);
            }

            .content-wrap {
              margin: auto;
              max-width: 380px;
            }

            h3 {
              font-size: 1.5em;
            }

            li {
              margin-bottom: 15px;
            }

            li a {
              font-size: 1.25em;
              text-decoration: none;
              transition: color .3s ease;
            }

            li a:hover {
              color: var(--orange);
            }

            @media (min-width: 769px) {
              section {
                border-bottom: 2px solid var(--green);
                max-height: none;
                overflow: inherit;
                height: 90vh;
                width: 40%;
                display: flex;
                align-items: center;
                padding: 60;
                overflow: scroll;
                overflow-x: hidden; 
              }

              ::-webkit-scrollbar {
                width: 8px;
              }

              ::-webkit-scrollbar-track {
                background: var(--white);
              }

              ::-webkit-scrollbar-thumb {
                background: var(--green);
              }
              
              .content-wrap {
                max-width: 315px;
              }

              h3 {
                font-size: 2em;
                margin: 30px 0 30px;
              }
  
              li {
                margin-bottom: 15px;
              }
  
              li a {
                font-size: 1.45em;
                text-decoration: none;
              }
            }

            @media (min-width: 1500px) {
              .content-wrap {
                max-width: 430px;
              }

              h3 {
                font-size: 2.5em;
              }

              li a {
                font-size: 2em;
              }
            }
          `}
          </style>
        </section>
    )
  }