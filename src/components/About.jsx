import React from "react";
import { Link as ScrollLink } from "react-scroll";

function About() {
  return (
    <>
      <div className="about-container" id="about">
        <h2>What I'll Do For You</h2>
        <div className="about-inner-container">
          <div className="about-text-container">
            <p>
              Deeply rooted in the realm of marketing, and a frontend developer,
              my focus lies in empowering YOU, the digital or tech creator, to
              craft not just any digital portfolio but one that propels you
              above the competition in this fiercely competitive market.
            </p>
            <br />
            <p>
              My mission is crystal clear: to guide and support you in building
              the digital portfolios you not only want but, more crucially, NEED
              to establish a foothold in your chosen field.
            </p>
            <br />
            <p>
              As a dedicated and expereinced advocate for career empowerment, I
              firmly believe that as a marketer or developer you need a digital
              portfolio as part of your arsenal to help you stand out - and
              that's what I am going to help you do.
            </p>
            <br />
            <p>
              Join me in the pursuit of standing out, making your mark, and
              elevating your career in the ever-evolving world of digital
              marketing and tech.
            </p>
            <br />
            <p>Let's build!</p>
          </div>
          <div className="about-image-container">
            <img
              className="about-image"
              src="james-hero-img.png"
              alt="James Alderman"
            />
          </div>
        </div>

        <div className="benefit-links">
          <ScrollLink
            activeClass="active"
            to="results"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Endorsements
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Frequently Asked Questions
          </ScrollLink>
        </div>
      </div>
    </>
  );
}

export default About;
