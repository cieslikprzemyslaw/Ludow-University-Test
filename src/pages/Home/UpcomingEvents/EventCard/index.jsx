// Deps scoped imports.
import React from 'react';

// Project scoped imports.

// Component scoped imports.
import {
  Event,
  DateSection,
  Day,
  Month,
  ImageSection,
  Image,
  ImageTitle,
} from './styles';

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const EventCard = ({ day, month, imageSrc, alt, title }) => {
  return (
    <Event>
      <DateSection>
        <Day>{day}</Day>
        <Month>{month}</Month>
      </DateSection>
      <ImageSection>
        <Image src={imageSrc} alt={alt} />
        <ImageTitle>{title}</ImageTitle>
      </ImageSection>
    </Event>
  );
};

export default EventCard;
