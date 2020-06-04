import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

import Main from "./components/Main";

export default class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/website/"
              >
                Mario Kiese
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/website/resume">Resume</Link>
              <Link to="/website/aboutme">About Me</Link>
              <Link to="/website/projects">Projects</Link>
              <Link to="/website/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Mario Kiese
              </Link>
            }
          >
            <Navigation>
              <Link to="/website/resume">Resume</Link>
              <Link to="/website/aboutme">About Me</Link>
              <Link to="/website/projects">Projects</Link>
              <Link to="/website/contact">Contact</Link>
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
