// imrc, ffc

import React from "react";

function Footer() {
  return (
    <footer class="w3-container w3-padding-32 w3-light-grey w3-center">
      <a href="#link-for-footer" class="w3-button w3-black w3-margin">
        <i class="fa fa-arrow-up w3-margin-right"></i>To the top
      </a>
      <div class="w3-xlarge w3-section">
        <a
          href="https://www.google.com"
          class="w3-hover-text-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            id="footer-icon-margin"
            class="fa fa-facebook-official w3-hover-opacity"
          ></i>
          <i
            id="footer-icon-margin"
            class="fa fa-instagram w3-hover-opacity"
          ></i>
          <i
            id="footer-icon-margin"
            class="fa fa-snapchat w3-hover-opacity"
          ></i>
          <i
            id="footer-icon-margin"
            class="fa fa-pinterest-p w3-hover-opacity"
          ></i>
          <i id="footer-icon-margin" class="fa fa-twitter w3-hover-opacity"></i>
          <i
            id="footer-icon-margin"
            class="fa fa-linkedin w3-hover-opacity"
          ></i>
        </a>
      </div>

      <a
        href="https://www.google.com"
        class="w3-hover-text-green"
        target="_blank"
        rel="noopener noreferrer"
      >
        E-mail me
      </a>
    </footer>
  );
}

export default Footer;
