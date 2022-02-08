export default function Main() {
    return (
    <main>
      <div className="main-content-wrap">
        <div className="h1-logo-wrap">
          <img
            src="/images/carrot-01.jpg" // Route of the image file
            alt="Your Name"
          />
          <h1>
            Dirty <br />
            Carrots
          </h1>
        </div>

        <h2>Just a girl trying to keep a record of all the gosh dang things she's&nbsp;learning.</h2>
      </div>
    <style jsx>{`
      main {
        border-bottom: 2px solid var(--green);
        padding: 110px 40px 40px;
      }
      .main-content-wrap {
        display: block;
        position: relative;
        max-width: 400px;
        margin: auto;
      }
      .h1-logo-wrap {
        margin-bottom: 20px;
      }
      h1 {
        position: relative;
        font-size: 3.5em;
        line-height: .8;
        z-index: 2;
        letter-spacing: 1px;
      }
      img {
        position: relative;
        z-index: 1;
        width: 75px;
        height: auto;
        position: absolute;
        left: 120px;
        transform: rotate(-35deg);
        top: -90px;
      }
      @media (min-width: 769px) {
        main {
          width: 60%;
          height: 90vh;
          display: flex;
          border-bottom: 2px solid var(--green);
          border-right: 2px solid var(--green);
          padding: 150px 100px 0;
        }
        .main-content-wrap {
          max-width: 450px;
        }
        h1 {
          font-size: 5em;
        }
        img {
          width: 125px;
          position: absolute;
          left: 150px;
          transform: rotate(-35deg);
          top: -160px;
        }
        h2 {
          font-size: 2.15em;
        }
      }
    `}</style>
    </main>
    )
  }