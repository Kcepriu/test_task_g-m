import { initialData } from "../../data/data";
import { Card } from "../Card/Card";
import { List, ElementList } from "./ListCards.styled";

export const ListCards = () => {
  return (
    <List>
      {initialData.map((data, index) => (
        <ElementList key={index}>
          <Card key={index} data={data} index={index} />
        </ElementList>
      ))}
    </List>
  );
};
