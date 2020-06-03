import React, { Component } from "react";
import Particles from "react-particles-js";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Particles
          style={{
            backgroundColor: "black",
            position: "fixed",
            top: "0",
            left: "0",
            height: "100%",
            zIndex: "-1",
          }}
          params={{
            particles: {
              number: {
                value: 150,
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
        <h1
          style={{
            position: "static",
            textAlign: "center",
            borderBottom: "white 2px solid",
            margin: "auto",
            width: "80%",
            color: "white",
          }}
        >
          Test
        </h1>
      </div>
    );
  }
}
