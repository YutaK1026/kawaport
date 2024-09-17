import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export type Experience = {
  title: string;
  content: string;
  date: string;
};

interface ExperienceProps {
  experiences: Experience[];
}

const Experiences = ({ experiences }: ExperienceProps) => {
  return (
    <VerticalTimeline>
      {experiences.map((prop) => {
        return (
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date={prop.date}
            iconStyle={{
              background: "#222222",
              color: "#fff",
              width: "40px",
              height: "40px",
            }}
          >
            <h3 className="vertical-timeline-element-title">{prop.title}</h3>
            <p>{prop.content}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Experiences;
