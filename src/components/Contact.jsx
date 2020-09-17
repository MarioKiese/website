import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

import avatar from "../photos/avatar_square.png";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mario Kiese</h2>
            <img src={avatar} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Programming, The real Magic!
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <i className="fa fa-phone" aria-hidden="true" />
                      <p style={{ fontSize: "0.9em", wordBreak: "break-all" }}>
                        0170 8275297
                      </p>
                    </div>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <p style={{ fontSize: "0.9em", wordBreak: "break-all" }}>
                        m.kiese1992@gmail.com
                      </p>
                    </div>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
