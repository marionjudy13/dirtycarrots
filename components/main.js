export default function Main() {
    return (
    <main>
      <div className="main-content-wrap">
        <div className="h1-logo-wrap">
          <h1>
            Dirty <br />
            Carrots
          </h1>
          <img
            src="/images/carrot-01.jpg" // Route of the image file
            alt="Your Name"
          />
        </div>

        <h2>Just a girl trying to keep a record of all the gosh dang things she's learning.</h2>
      </div>
    <style jsx>{`
      main {
        border-bottom: 2px solid var(--green);
        padding: 50px 40px 40px;
      }

      @media (min-width: 769px) {
        main {
          width: 60%;
          height: 100vh;
          display: flex;
          border-bottom: none;
          border-right: 2px solid var(--green);
        }
      }

      .main-content-wrap {
        max-width: 400px;
        margin: auto;
      }

      .h1-logo-wrap {
        display: flex;
        align-items: end; 
        margin-bottom: 20px;
      }

      h1 {
        font-size: 3.5em;
        line-height: .8;
        z-index: 1;
        letter-spacing: 1px;
      }

      img {
        width: 75px;
        transform: rotate(-40deg) translate(-10px, -50px);
      }

      @media (min-width: 769px) {
        .main-content-wrap {
          max-width: 450px;
        }

        h1 {
          font-size: 5em;
        }

        img {
          width: 125px;
          transform: rotate(-40deg) translate(-40px, -100px);
        }

        h2 {
          font-size: 2.15em;
        }
      }
    `}</style>
    {/* <style jsx>{`
      main {
        max-width: 347px;
        padding: 20px 40px 30px 40px;
        margin: auto;
        border-bottom: 2px solid var(--green);

      }

      .heading-wrapper {
        display: flex;
        align-items: end; 
        margin-bottom: 20px;
      }

      h1 {
        font-size: 60px;
        line-height: .7;
        z-index: 1;
        letter-spacing: 1px;
      }

      img {
        width: 75px;
        transform: rotate(-30deg) translate(-20px, -35px);
      }
      
    `}</style> */}
    </main>
    )
  }