import { Mapper } from "./mapper";
import { ShoppingList } from "~/models/shoppinglist";

const INDEX_ID: number = 0;
const INDEX_NAME: number = 1;
const INDEX_CREATED_AT: number = 2;
const PROPERTY_COUNT = 3;

export class ShoppingListMapper implements Mapper<ShoppingList> {
    

    map(source: Object[]): ShoppingList {
        if(source.length !== PROPERTY_COUNT){
            throw new Error('Property count mismatch');
        }

        let shoppinglist = new ShoppingList(source[INDEX_NAME] as string)
        shoppinglist.Id = source[INDEX_ID] as number;
        shoppinglist.CreatedAt = new Date(source[INDEX_CREATED_AT] as string);
        return shoppinglist;
    }

}