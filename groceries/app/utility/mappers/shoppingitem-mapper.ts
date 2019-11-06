import { Mapper } from "./mapper";
import { ShoppingItem } from "../../models/shoppingitem";

export class ShoppingItemMapper implements Mapper<ShoppingItem>{
    
    map(source: Object): ShoppingItem {
        console.log(source);
        return null;
    }

}