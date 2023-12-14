
import ItemCounter from "../ItemCount/ItemCounter";
import { CardList } from "../CardList/CardList";


export const ItemListContainer = ({ greeting }) => {

  return (
    <div>
      <ItemCounter></ItemCounter>
      <h2 className="text-center">{greeting}</h2>
      <CardList/>
    </div>
  )}