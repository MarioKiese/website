import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

export default class Projects extends Component {
  state = {
    activeTab: 0,
  };

  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://punkt.de/_Resources/Persistent/8/f/c/0/8fc0125238b099cacbed5db2fad79da413cc4654/React_Native_Logo-1140x599.png) center / cover",
                }}
              >
                ToDo List
              </CardTitle>
              <CardText>
                Simple ToDo List application with authentication and Express.js
                as backend.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://punkt.de/_Resources/Persistent/8/f/c/0/8fc0125238b099cacbed5db2fad79da413cc4654/React_Native_Logo-1140x599.png) center / cover",
                }}
              >
                Website
              </CardTitle>
              <CardText>
                I created my own website with React as frontend library.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      case 1:
        return (
          <div>
            <h1>Others</h1>
          </div>
        );
      // case 2:
      //     return(<div><h1>This is VueJS</h1></div>);
      // case 3:
      //     return(<div><h1>This is MongoDB</h1></div>);
      default:
        return (
          <div>
            <h1>This is React</h1>
          </div>
        );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Others</Tab>
          {/* <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab> */}
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
