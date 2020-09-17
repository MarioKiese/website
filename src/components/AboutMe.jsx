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
        <div
          style={{
            position: "static",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              borderBottom: "white 2px solid",
              margin: "auto",
              width: "80%",
              color: "white",
            }}
          >
            That's me!
          </h1>
          <p
            style={{
              fontSize: "2em",
              textAlign: "center",
              borderBottom: "white 2px solid",
              margin: "auto",
              paddingTop: "2em",
              paddingBottom: "2em",
              width: "80%",
              color: "white",
            }}
          >
            Hi! My name is Mario and I like programming and technology stuff :)!
          </p>
          <p
            style={{
              fontSize: "2em",
              textAlign: "center",
              borderBottom: "white 2px solid",
              margin: "auto",
              paddingTop: "2em",
              paddingBottom: "2em",
              width: "80%",
              color: "white",
            }}
          >
            After school I started studying Business Administration in Münster,
            Germany and focused on Marketing and Financial Controlling. Then
            I've been working as Junior Controller for a medium-sized company
            for about 8 months.
          </p>
          <p
            style={{
              fontSize: "2em",
              textAlign: "center",
              borderBottom: "white 2px solid",
              margin: "auto",
              paddingTop: "2em",
              paddingBottom: "2em",
              width: "80%",
              color: "white",
            }}
          >
            It was fun, but in my spare time I spent lots of hours with
            programming or started to build my own little quadcopter. Actually I
            knew that this was my real way. I began studying Computer Sciences
            in Lemgo, Germany and it was incredibly exciting. With some new
            friends I found there, we travelled to Hackathons in Munich, Kiel
            and Eindhoven. I only can recommend everyone to participate any kind
            of Hackathon. It is lots of fun and you get to know really cool
            people!
          </p>
          <p
            style={{
              fontSize: "2em",
              textAlign: "center",
              borderBottom: "white 2px solid",
              margin: "auto",
              paddingTop: "2em",
              paddingBottom: "2em",
              width: "80%",
              color: "white",
            }}
          >
            After 3 years in Lemgo I went back to Münster and started my
            Master's degree in Business Informatics. And that's the point where
            I am right now. In addition to my studies, I work as a working
            student at a software company as IoT developer. And so far I'm
            really happy and can't wait to looking forward to the upcoming
            things :)!
          </p>
        </div>
      </div>
    );
  }
}
