import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { Logo } from "./Logo";
import { WorkIcon } from "./WorkIcon";
import { SchoolIcon } from "./SchoolIcon";
import { MainTitle } from "./MainTitle";
import { TimelineItemType, TimelineItemWrapper } from "./TimelineItemWrapper";

import "react-vertical-timeline-component/style.min.css";

export function Career() {
    return (
        <React.Fragment>
            <MainTitle />
            <VerticalTimeline>
                {careerTimelineItems.map(
                    (item: TimelineItemType, index: number) => (
                        <TimelineItemWrapper
                            key={index}
                            title={item.title}
                            address={item.address}
                            details={item.details}
                            icon={item.icon}
                            iconStyle={item.iconStyle}
                            contentStyle={item.contentStyle}
                            contentArrowStyle={item.contentArrowStyle}
                            date={item.date}
                        />
                    )
                )}
            </VerticalTimeline>
        </React.Fragment>
    );
}
