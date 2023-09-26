import React from 'react'

const Footer = () => {
  return (
    <>
     

                <footer className="footer">
                  <div className="footer-container">
                    <div className="footer-section">
                      <h4>Contact Information</h4>
                      <p>123 Main Street, City</p>
                      <p>Phone: (123) 456-7890</p>
                      <p>Email: hstore@gmail.com</p>
                    </div>

                    <div className="footer-section">
                      <h4>Quick Links</h4>
                      <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Shipping</a></li>
                        <li><a href="/">Returns</a></li>
                      </ul>
                    </div>

                    <div className="footer-section">
                      <h4>Customer Service</h4>
                      <ul>
                        <li><a href="/">Customer Support</a></li>
                        <li><a href="/">Track Order</a></li>
                        <li><a href="/">Size Guide</a></li>
                        <li><a href="/">Gift Cards</a></li>
                      </ul>
                    </div>

                    <div className="footer-section">
                      <h4>Follow Us</h4>
                      <ul className="social-icons">
                        <li><a href="/"><i className="ri-facebook-circle-fill"></i></a></li>
                        <li><a href="/"><i className="ri-twitter-line"></i></a></li>
                        <li><a href="/"><i className="ri-instagram-line"></i></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="copyright">
                    &copy; 2023 .hstore. All Rights Reserved.
                  </div>
                </footer>

          </>
          )
}

          export default Footer
