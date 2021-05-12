// Deps scoped imports.
import React from "react";
import { useHistory } from "react-router";

// Project scoped imports.

// Component scoped imports.
import { BannerImage, Strap, Title } from "./styles";
import Button from "../../../components/Button";

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
      <Button
        text={"Book an Open Day"}
        onClick={pushToBookDay}
        width={260}
        color={`#FFF`}
      />
    </BannerImage>
  );
};

export default Banner;
