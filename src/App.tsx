import React from "react";
import profile from "./assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import resume from "./assets/resume_v4_4.pdf";

import "./App.css";
import { IconLink } from "./components";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <div className="profile__wrapper">
          <img src={profile} className="profile__img" alt="profile" />
          <div className="profile__text-wrapper">
            <div className="profile__name">Stanley Guo</div>
            <div className="profile__description">
              I am a recent computer engineering graduate from the University of
              Waterloo. I am currently based in Ontario, Canada.
            </div>
          </div>
        </div>
        <div className="navigation__wrapper">
          <IconLink
            Icon={IoDocumentText}
            name="Resumé"
            color="#b5a66ee6"
            href={resume}
          />
          <IconLink
            Icon={FaLinkedin}
            name="Linkedin"
            color="rgb(47 80 114)"
            href="https://www.linkedin.com/in/stanleyguosq/"
          />
          <IconLink
            Icon={FaGithub}
            name="Github"
            href="https://github.com/sqguo"
          />
          <IconLink
            Icon={RiContactsBook2Fill}
            name="Contact"
            color="#551d4d96"
            href="mailto:sqguo@uwaterloo.ca"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
