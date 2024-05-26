import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Connect With Me</h4>
            <ul className="links">
              <li>
                <a href="https://drive.google.com/file/d/1ncWmgUBNQYQYNVDlD_aX27ZsA42u3guQ/view?usp=sharing">
                  My Resume
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sonisumit7904/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/sonisumit7904">GitHub</a>
              </li>
            </ul>
          </div>

          <div className="footer-col midFooter">
            <h1>ECOMMERCE</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2024 &copy; sonisumit7904</p>
          </div>

          <div className="footer-col">
            <h4>Contact Me</h4>
            <p>Let's have a talk!</p>
            <form action="mailto:sonisumit7904@gmail.com">
              <button type="submit">Mail Me</button>
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
