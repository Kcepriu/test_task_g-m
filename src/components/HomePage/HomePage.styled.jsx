import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding: 8px;

  @media screen and (min-width: 440px) {
    max-width: 440px;
  }

  @media screen and (min-width: 932px) {
    max-width: 932px;
    padding: 30px;
  }

  @media screen and (min-width: 1380px) {
    max-width: 1380px;
  }
`;
