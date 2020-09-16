import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

import Main from "./components/Main";

export default class App extends Component {
  closeDrawer = () => {
    let drawer = document.querySelector(".mdl-layout__drawer");
    drawer.classList.remove("is-visible");
    drawer.setAttribute("aria-hidden", "true");

    let obfuscator = document.querySelector(".mdl-layout__obfuscator");
    obfuscator.classList.remove("is-visible");
  };

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Mario Kiese
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                onClick={() => this.closeDrawer()}
                style={{ textDecoration: "none", color: "black" }}
                to="/"
              >
                Mario Kiese
              </Link>
            }
          >
            <Navigation>
              <Link onClick={() => this.closeDrawer()} to="/resume">
                Resume
              </Link>
              <Link onClick={() => this.closeDrawer()} to="/aboutme">
                About Me
              </Link>
              <Link onClick={() => this.closeDrawer()} to="/projects">
                Projects
              </Link>
              <Link onClick={() => this.closeDrawer()} to="/contact">
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
