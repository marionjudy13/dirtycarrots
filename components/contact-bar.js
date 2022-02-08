import Socials from "./socials"

export default function ContactBar() {
    return (
    <footer>
        <div className="wrapper">
            <Socials />
            <a href="mailto: marion@spiderwebs.dev" target="_blank">
                marion@spiderwebs.dev
            </a>
        </div>
    <style jsx>{`
        footer {
            display: block;
            border-top: 2px solid var(--green);
            padding: 20px 40px;
        }

        .wrapper {
            display: flex;
            align-items: center;
            flex-wrap: no-wrap;
            justify-content: space-between;
            max-width: 400px;
            margin: auto;
        }

        a {
            color: var(--green);
            font-size: 1em;
            text-decoration: none;
            line-height: 28px;
            transition: color .3s ease;
        }

        a:hover {
            color: var(--orange);
        }


        @media (min-width: 769px) {
            footer {
                border-top: none;
                width: 60%;
                height: 10vh;
                display: flex;
                padding: 0 100px;
                align-items: center;
            }
            
            .wrapper {
                justify-content: flex-start;
                width: 450px;
                max-width: 450px;
                padding: 0;
                margin: auto;
            }


            a {
                color: var(--green);
                font-size: 1.25em;
                text-decoration: none;
                line-height: 30px;
                margin-left: 40px;
                transition: color .3s ease;
            }


        }
    `}</style>
    </footer>
    )
  }