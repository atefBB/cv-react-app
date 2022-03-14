import React from "react";

import { TimelineItemType } from "./TimelineItemWrapper";
import { Logo } from "./Logo";
import { WorkIcon } from "./WorkIcon";
import { SchoolIcon } from "./SchoolIcon";

export const careerTimelineItems: TimelineItemType[] = [
    {
        title: "Atef Ben Ali",
        address: "Douz, Kebili, Tunisia",
        details: "Muslim Engineer",
        icon: <Logo />,
        contentStyle: {
            background: "rgb(33, 150, 243)",
            color: "#fff",
        },
        contentArrowStyle: {
            borderRight: "7px solid  rgb(33, 150, 243)",
        },
    },
    {
        title: "Web Developer",
        address: "Golaa, Kebili, Tunisia",
        details: "Web developer, Project Manager in Aures Company",
        icon: <WorkIcon />,
        iconStyle: {
            background: "rgb(33, 150, 243)",
            color: "#fff",
        },
        date: "11/2020 - present",
    },
    {
        title: "Web Developer",
        address: "Menzah 9, Ariana, Tunisia",
        details: "Web developer, Project Manager in DEVNET Company",
        date: "02/2019 - 10/2020",
        iconStyle: {
            background: "rgb(33, 150, 243)",
            color: "#fff",
        },
        icon: <WorkIcon />,
    },
    {
        title: "Web Developer",
        address: "Sfax, Tunisia",
        details: "Full-stack web developer in Novatis Web agency",
        date: "06/2016 - 01/2019",
        iconStyle: {
            background: "rgb(33, 150, 243)",
            color: "#fff",
        },
        icon: <WorkIcon />,
    },
    {
        title: "Engineer Student",
        address: "ISIM, Sfax, Tunisia",
        details: "",
        date: "2013 - 2016",
        iconStyle: {
            background: "rgb(33, 150, 243)",
            color: "#fff",
        },
        icon: <SchoolIcon />,
    },
    {
        title: "Computer Sciences Licence",
        address: "ISIM, Mahdia, Tunisia",
        details: "",
        date: "2009 - 2011",
        iconStyle: {
            background: "rgb(33, 150, 243)",
            color: "#fff",
        },
        icon: <SchoolIcon />,
    },
    {
        title: "Computer Sciences Baccalaureat",
        address: "Douz, Kebili, Tunisia",
        details: "",
        date: "June 2008",
        iconStyle: {
            background: "rgb(33, 150, 243)",
            color: "#fff",
        },
        icon: <SchoolIcon />,
    },
];
