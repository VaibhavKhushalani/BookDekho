import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <div className="footer-widget-heading">
                    <h2>BooksDekho.com</h2>
                  </div>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon mb-4">
                  <span>Follow us</span>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Contact Us</h3>
                </div>

                <div className="row">
                  <div className="col-xl-6 col-md-6 mb-30">
                    <div className="single-cta">
                      <i className="fas fa-phone"></i>
                      <div className="cta-text">
                        <h4>Call us</h4>
                        <span>+91 7536024636</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6 mb-30">
                    <div className="single-cta">
                      <i className="far fa-envelope-open"></i>
                      <div className="cta-text">
                        <h4>Mail us</h4>
                        <span>vaibhavkhushlani04@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2022, All Right Reserved</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
