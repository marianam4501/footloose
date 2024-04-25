import "./styles.scss"

const Disclaimer = () => {

    const disclaimerText = "By using this website, you agree to our terms and conditions, including our privacy policy, limitations of liability, and disclaimers of warranties. We are not responsible for any damages or losses arising from your use of this website. This website is governed by the laws of Costa Rica. Contact clientservice@footloose.com for inquiries.";
    
    return(
        <div className="disclaimer">
          <p className="disclaimer__text">
            {disclaimerText}
          </p>
        </div>
    )
}

export default Disclaimer;