export default function Main() {
    return (
    <main>
      <div className="heading-wrapper">
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
    
    <style jsx>{`
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
      
    `}</style>
    </main>
    )
  }