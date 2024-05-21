import { styled } from "styled-components";

export const WrapCard = styled.div`
  height: 587px;
  width: 100%;
  padding: 22px;
  border-radius: 4px;
  border: 2px solid ${(props) => props.$border_color || "black"};

  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: "Inter";
  color: #2d2d2d;
  font-size: 24px;
  line-height: 1.5;

  @media screen and (max-width: 439px) {
    height: auto;
  }
`;

export const ListContent = styled.ul`
  list-style-type: disc;
  list-style-position: outside;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 24px;
  flex-grow: 1;
`;

export const ElementListContent = styled.li`
  /* outline: 1px solid red; */
`;

export const Icon = styled.svg`
  height: 100px;
  width: ${(props) => props.$width_icon || "100%"};
  margin-left: auto;
  fill: ${(props) => props.$fill_color || "black"};
`;

export const TitleCard = styled.h2`
  color: #181833;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
`;

export const ViewMore = styled.a`
  color: inherit;
  margin-left: auto;
  &:hover {
    color: ${(props) => props.$hover_color || "black"};
  }
`;
