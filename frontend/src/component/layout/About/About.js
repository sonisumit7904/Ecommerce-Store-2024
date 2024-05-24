import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AttachFileIcon from "@material-ui/icons/AttachFile";
const About = () => {
  const visitResume = () => {
    window.location =
      "https://drive.google.com/file/d/1ncWmgUBNQYQYNVDlD_aX27ZsA42u3guQ/view?usp=sharing";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkkqkjtnu/image/upload/v1716539755/avatars/wp8192987-zuko-bored-wallpapers_itjixw.jpg"
              alt="Founder"
            />
            <Typography>Sumit Soni</Typography>
            <Button className="resumeBtn" onClick={visitResume} color="primary">
              <AttachFileIcon />
              See My Resume
            </Button>
            <span>
              This is an Ecommerce website made by @sonisumit7904. Only with the
              purpose of Showcasing my MERN Stack Skils.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect With Me</Typography>
            <a href="https://github.com/sonisumit7904" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/sonisumit7904/" target="blank">
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
