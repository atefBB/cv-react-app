import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { Logo } from "./Logo";
import { WorkIcon } from "./WorkIcon";
import { SchoolIcon } from "./SchoolIcon";

import "react-vertical-timeline-component/style.min.css";

export function Career() {
  return (
    <React.Fragment>
      <h2 style={{ color: "#fff", fontSize: "30px" }}>Work & Education</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={<Logo />}
        >
          <h3 className="vertical-timeline-element-title">Atef Ben Ali</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Douz, Kebili, Tunisia
          </h4>
          <p>Muslim Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11/2020 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Golaa, Kebili, Tunisia
          </h4>
          <p>Web developer, Project Manager in Softavera Company</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="02/2019 - 10/2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Menzah 9, Ariana, Tunisia
          </h4>
          <p>Web developer, Project Manager in DEVNET Company</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="06/2016 - 01/2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Sfax, Tunisia</h4>
          <p>Full-stack web developer in Novatis Web agency</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Engineer Student</h3>
          <h4 className="vertical-timeline-element-subtitle">
            ISIM, Sfax, Tunisia
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Sciences Licence
          </h3>
          <p>ISIM, Mahdia, Tunisia</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Sciences Baccalaureate
          </h3>
          <p>Douz, Tunisia</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
}
