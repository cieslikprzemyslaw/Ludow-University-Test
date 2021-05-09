// Deps scoped imports.
import React from "react";

// Project scoped imports.
import Rock from "../../../assets/images/events/rock.png";
import Game from "../../../assets/images/events/game.png";
import Study from "../../../assets/images/events/study.png";

// Component scoped imports.
import {
  Button,
  Title,
  Events,
  Header,
  EventsSection,
  ButtonText,
} from "./styles";
import EventCard from "./EventCard";
import { useHistory } from "react-router";

/**
 * Example component.
 * @description This is Component to display upcoming Events for Ludlow University Component should be below Banner component.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const EVENTS_LIST = [
  {
    id: 1,
    day: "01",
    month: "Aug",
    imageSrc: Rock,
    alt: "Women on a rock party",
    title: "Ludlow campus rock festival 2019",
  },
  {
    id: 2,
    day: "01",
    month: "Aug",
    imageSrc: Game,
    alt: "Youth with VR",
    title: "2019 game design exhibition",
  },
  {
    id: 3,
    day: "01",
    month: "Aug",
    imageSrc: Study,
    alt: "Man with laptop",
    title: "Study collaboration session ",
  },
];

const UpcommingEvents = () => {
  const history = useHistory();

  const pushToEvents = () => history.push("/events");

  return (
    <Events>
      <Header>
        <Title>Upcoming events</Title>
        <Button onClick={pushToEvents}>
          <ButtonText>View all events</ButtonText>
        </Button>
      </Header>
      <EventsSection>
        {EVENTS_LIST.map(({ id, day, month, imageSrc, alt, title }) => {
          return (
            <EventCard
              key={id}
              day={day}
              month={month}
              imageSrc={imageSrc}
              alt={alt}
              title={title}
            />
          );
        })}
      </EventsSection>
    </Events>
  );
};

export default UpcommingEvents;
