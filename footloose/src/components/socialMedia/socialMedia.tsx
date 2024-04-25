import "./styles.scss"

const SocialMedia = () => {

    return(
        <div className="socialMedia">
            {/* <div
              className="container--flex container--vertical container--no-padding"
            >
              
            </div> */}
            <h2 id="socialMedia__title">Follow us</h2>
            <div className="socialMedia__icons">
                <a
                  className="socialMedia__icons__link"
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <img
                    className="socialMedia__icons__logo"
                    src="./images/facebook.png"
                    alt="Facebook logo"
                  />
                </a>
                <a
                  className="socialMedia__icons__link"
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <img
                    className="socialMedia__icons__logo"
                    src="./images/instagram.jpg"
                    alt="Instagram logo"
                  />
                </a>
                <a
                  className="socialMedia__icons__link"
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  <img
                    className="socialMedia__icons__logo"
                    src="./images/x.avif"
                    alt="X logo"
                  />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;