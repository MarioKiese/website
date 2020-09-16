import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Particles from "react-particles-js";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Particles
          style={{
            backgroundColor: "black",
            position: "fixed",
            height: "100%",
            top: "0",
            left: "0",
          }}
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Fullstack Developer</h1>
              <hr />
              <p>
                HTML/CSS | Material UI | JavaScript | React | React Native |
                NodeJS | Express | MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="www.linkedin.com/in/mario-kiese-8740a0b1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>

                {/* Xing */}
                <a
                  href="https://www.xing.com/profile/Mario_Kiese/cv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-xing" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/MarioKiese"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
