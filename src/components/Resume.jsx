import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import avatar from "../photos/mario_kiese.jpg";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div>
              <img
                //src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png'
                src={avatar}
                alt="avatar"
                style={{ height: "300px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Mario Kiese</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              Highly interested in technology stuff especially everything that
              has to do with programming. My main interests are web development
              with all its beauty from HTML over React to Microservices. I am
              also fascinated by the big field of IoT and develop small apps
              connected with sensors and a web dashboard in some hobby projects.
              I can say that I found what I was looking for and I am absolutely
              passionate for it :) !
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            {/* <h5>Address</h5>
            <p>Billerbecker Str. 12, 48341 Altenberge</p> */}
            <h5>Phone</h5>
            <p>0170 8275297</p>
            <h5>Email</h5>
            <p>m.kiese1992@gmail.com</p>
            <h5>Web</h5>
            <p>mariokiese.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2016}
              schoolName="University of Applied Sciences Münster, Business Administration (Bachelor of Arts)"
              schoolDescription="FH Münster, based in the Westphalian city of Münster with a second campus in Steinfurt, is a German university. It has a student enrolment of around 15,000 (as of winter semester 2018/19), making it one of the largest public universities of applied sciences in Germany. It has twelve faculties and one central scientific unit."
            />
            <Education
              startYear={2016}
              endYear={2019}
              schoolName="OWL University of Applied Sciences and Arts, Computer Science (Bachelor of Science)"
              schoolDescription="The OWL University of Applied Sciences and Arts is a university of applied sciences in Ostwestfalen-Lippe in Lemgo, North Rhine-Westphalia. Further campus are in Detmold and Höxter. About 6,600 students work closely with 173 professors and about 550 other staff members in research, teaching and administration."
            />
            <Education
              startYear={2019}
              endYear={2021}
              schoolName="University of Applied Sciences Münster, Business Informatics (Master of Science)"
              schoolDescription="FH Münster, based in the Westphalian city of Münster with a second campus in Steinfurt, is a German university. It has a student enrolment of around 15,000 (as of winter semester 2018/19), making it one of the largest public universities of applied sciences in Germany. It has twelve faculties and one central scientific unit."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2012}
              endYear={2015}
              jobName="Dual Studies Program Business Administration (Bachelor of Arts), Aug Winkhaus GmbH & Co. KG"
              jobDescription='According to the dual training system, a dual degree is a university course with firmly integrated practical assignments in companies. It differs from "classic" courses in that it has a higher practical relevance, which varies depending on the course and university.'
            />
            <Experience
              startYear={2015}
              endYear={2016}
              jobName="Junior Controller, Aug Winkhaus GmbH & Co. KG"
              jobDescription="Reporting and plannings tasks, invest projects"
            />
            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Dual Studies Program Computer Science (Bachelor of Science), Phoenix Contact Electronics GmbH"
              jobDescription='According to the dual training system, a dual degree is a university course with firmly integrated practical assignments in companies. It differs from "classic" courses in that it has a higher practical relevance, which varies depending on the course and university.'
            />
            <Experience
              startYear={2019}
              endYear={2021}
              jobName="Working Student Developer, cronos GmbH"
              jobDescription="Web Development and SAP Applications"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skill skill="Javascript" progress={90} />
            <Skill skill="React" progress={87} />
            <Skill skill="Lit" progress={85} />
            <Skill skill="HTML/CSS" progress={85} />
            <Skill skill="Typescript" progress={75} />
            <Skill skill="C#" progress={70} />
            <Skill skill="Java" progress={60} />
            <Skill skill="SAPUI5" progress={55} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
