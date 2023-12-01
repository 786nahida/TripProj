import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="top"><div>
      <div>
        <h1>Trip</h1>
        <p>socially connect us through the app</p>
      </div>
      <div >
        <a herf="">
        <h2><i className="fa-brands fa-instagram-square"></i></h2>
        </a>
        <a herf="">
        <h2><i className="fa-brands fa-youtube-square"></i></h2>
        </a>
        <a herf="">
        <h2><i className="fa-brands fa-twitter-square"></i></h2>
        </a>
        <a herf="">
        <h2><i className="fa-brands fa-facebook-square"></i></h2>
        </a>
      </div>
      
    </div>
    <div className="bottom">
      <div>
        <h4>project</h4>
        <a href="/">changelog</a>
        <a href="/">status</a>
        <a href="/">license</a>
        <a href="/">all version</a>
      </div>
      <div>
      <h4>community</h4>
      <a href="/">github</a>
      <a href="/">issues</a>
      <a href="/">projects</a>
      <a href="/">twitter</a>
      </div>
      <div>
      <h4>help</h4>
      
      <a href="/">support</a>
      <a href="/">contact us</a>
      <a href="/">about us</a>
      </div>
      <h4>others</h4>
      
      <a href="/">term of service</a>
      <a href="/">privacy policy</a>
      <a href="/">license</a>
      </div>
    </div>
    </div>
  );
};

export default Footer;