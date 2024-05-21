/* eslint-disable react/prop-types */
import { getColor } from "../helpers/getColor";
import sprite from "../../assets/icons.svg";

import {
  WrapCard,
  ListContent,
  Icon,
  TitleCard,
  ElementListContent,
  ViewMore,
} from "./Card.styled";

export const Card = ({ data, index }) => {
  const { icon, title, content, url, width } = data;
  const currentColor = getColor(index);
  return (
    <WrapCard $border_color={currentColor}>
      {/* <Icon src={tapIcon} className="logo" alt="Vite logo" /> */}

      <Icon $fill_color={currentColor} $width_icon={width}>
        <use href={`${sprite}#icon-${icon} `} />
      </Icon>

      <TitleCard>{title}</TitleCard>
      <ListContent>
        {content.map((element, index) => (
          <ElementListContent key={index}>{element}</ElementListContent>
        ))}
      </ListContent>

      <ViewMore
        href={url}
        target="_blank"
        rel="noreferrer noopener, nofollow"
        $hover_color={currentColor}
      >
        View more
      </ViewMore>
    </WrapCard>
  );
};
