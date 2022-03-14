import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ObjectType = { [key: string]: string };

export type TimelineItemType = {
    title: string;
    address: string;
    details: string;
    icon: React.ReactNode;
    iconStyle?: ObjectType;
    contentStyle?: ObjectType;
    contentArrowStyle?: ObjectType;
    date?: string;
};

export function TimelineItemWrapper({
    title,
    address,
    details,
    icon,
    iconStyle,
    contentStyle,
    contentArrowStyle,
    date,
}: TimelineItemType) {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle !== undefined ? contentStyle : {}}
            contentArrowStyle={
                contentArrowStyle !== undefined ? contentArrowStyle : {}
            }
            icon={icon}
            iconStyle={iconStyle !== undefined ? iconStyle : {}}
            date={date !== undefined ? date : ""}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{address}</h4>
            <p>{details}</p>
        </VerticalTimelineElement>
    );
}
