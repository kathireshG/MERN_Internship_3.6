import React from "react";
import "./styles.css";

function Portfolio() {
  return (
    <div>
      {/* WELCOME */}
      <div id="welcome">
        <h1>Kathiresh</h1>
        <h3>
          <b>Web Developer and Computer Science Enthusiast</b>
        </h3>
      </div>

      {/* ABOUT */}
      <div id="about">
        <h1>About Me</h1>
        <center>
          <div id="self">
            <img
              className="img-responsive"
              src="https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg"
              alt="Derpy Charmander"
            />
          </div>
        </center>
        <br />
        <p>
          Hi! I’m Kathiresh, and web development is my passion.
          <br />
          <br /> I help people build websites they love, and I absolutely adore
          making people smile.
          <br />
          <br /> When I’m not programming, you can find me drawing, or drinking
          a nice cup of tea.
        </p>
        <br />
        <br />
        <span id="email">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            alt="Email Icon"
          />{" "}
          gkkathiresh2003@gmail.com
        </span>
        <span id="portScroll">
          <a
            className="smoothScroll"
            href="https://www.linkedin.com/in/kathiresh-gopalakrishnan/"
            target="_blank"
          >
            <img
              src="http://www.meegankent.com/images/portfolio-icon2.png"
              alt="Portfolio Icon"
            />{" "}
            View My Profile
          </a>
        </span>
      </div>
    </div>
  );
}

export default Portfolio;
