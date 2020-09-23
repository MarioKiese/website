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
import logo from "../photos/logo_kiese_service.png";
import avatar from "../photos/avatar_square.png";
import hulu from "../photos/hulu_logo.jpg";
import slack from "../photos/slack_logo.png";
import spotify from "../photos/spotify_logo.png";
import utalk from "../photos/utalk_logo.png";

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
                  borderBottom: "1px solid gray",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <h4
                    style={{
                      backgroundColor: "black",
                      margin: "0",
                      borderRadius: "40px",
                      padding: "5px",
                    }}
                  >
                    Application
                  </h4>
                </div>
              </CardTitle>
              <CardText>
                Shopping List application build upon the MERN Stack with
                authentication.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/MarioKiese/MERN_Stack_Shopping_List"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "176px",
                  background: `url(${avatar})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderBottom: "1px solid gray",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <h4
                    style={{
                      backgroundColor: "black",
                      margin: "0",
                      borderRadius: "40px",
                      padding: "5px",
                    }}
                  >
                    Website
                  </h4>
                </div>
              </CardTitle>
              <CardText>
                I created my own website with React as frontend library.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/MarioKiese/website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: `url(${logo})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  borderBottom: "1px solid gray",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <h4
                    style={{
                      backgroundColor: "black",
                      margin: "0",
                      borderRadius: "40px",
                      padding: "5px",
                    }}
                  >
                    Website
                  </h4>
                </div>
              </CardTitle>
              <CardText>
                I created the website for Kiese-Service with React as frontend
                library.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="http://www.kiese-service.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it live
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 4 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: `url(${hulu})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderBottom: "1px solid gray",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <h4
                    style={{
                      backgroundColor: "black",
                      margin: "0",
                      borderRadius: "40px",
                      padding: "5px",
                    }}
                  >
                    Clone
                  </h4>
                </div>
              </CardTitle>
              <CardText>
                Hulu clone application with styling and some general
                functionality of Hulu.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://hulu-clone-12256.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it live
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 5 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: `url(${slack})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderBottom: "1px solid gray",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <h4
                    style={{
                      backgroundColor: "black",
                      margin: "0",
                      borderRadius: "40px",
                      padding: "5px",
                    }}
                  >
                    Clone
                  </h4>
                </div>
              </CardTitle>
              <CardText>
                Slack clone application with styling and some general
                functionality like posting messages and login via Google.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://slack-clone-26df0.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it live
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 6 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: `url(${spotify})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  borderBottom: "1px solid gray",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <h4
                    style={{
                      backgroundColor: "black",
                      margin: "0",
                      borderRadius: "40px",
                      padding: "5px",
                    }}
                  >
                    Clone
                  </h4>
                </div>
              </CardTitle>
              <CardText>
                Spotify clone application with styling and very less
                functionality like showing my Discover Weekly playlist and other
                playlist as well as username and user image .
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://spotify-clone-c2755.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it live
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      case 1:
        return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "20px" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: `url(${utalk})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  borderBottom: "1px solid gray",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <h4
                    style={{
                      backgroundColor: "black",
                      margin: "0",
                      borderRadius: "40px",
                      padding: "5px",
                    }}
                  >
                    Mobile App
                  </h4>
                </div>
              </CardTitle>
              <CardText>
                Mobile app created with Ionic, LitElement and Capacitor to cover
                the whole interview process from noting questions in categories
                over taking the interview and do some postprocessing.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  // href="https://slack-clone-26df0.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Soon in Play Store and App Store
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
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
          <Tab>Ionic</Tab>
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
