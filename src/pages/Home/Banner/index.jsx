// Deps scoped imports.
import React from "react";
import { useHistory } from "react-router";

// Project scoped imports.

// Component scoped imports.
import { BannerImage, Strap, Title, Button } from "./styles";

/**
 * Example component.
 * @description This component is between Cards component and Upcoming events.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const Banner = () => {
  const history = useHistory();

  const pushToBookDay = () => history.push("/bookday");

  return (
    <BannerImage>
      <Strap></Strap>
      <Title>
        Come along to one of our Open Days and find out everything you need to
        know about the campus, courses, and facilities
      </Title>
      <Button onClick={pushToBookDay}>Book an Open Day</Button>
    </BannerImage>
  );
};

export default Banner;
