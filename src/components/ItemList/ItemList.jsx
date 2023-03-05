import { Item } from "../Item/Item";
import { ItemCart } from "../ItemCart/ItemCart";

export const ItemList = ({ products, plantilla }) => {
  const PlantillaItem = plantilla ? plantilla.toLowerCase() === 'item' : true;

  return (
    <>
      { products.map(producto => PlantillaItem ? <Item item={producto} key={producto.id}/> : <ItemCart item={producto} key={`cart_${producto.id}`}/> ) }
    </>
  );
}