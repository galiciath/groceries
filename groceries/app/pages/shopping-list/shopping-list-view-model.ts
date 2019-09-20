import { Observable } from "tns-core-modules/ui/page/page";
import { ShoppingList } from "~/models/shoppinglist";
import { ShoppingListRepository } from "~/repositories/shoppinglist-repository";

export class ShoppingListViewModel extends Observable{

    private shoppingList: ShoppingList = undefined;
    private shoppingListRepo: ShoppingListRepository = undefined;

    constructor(shoppingListId: number) {
        super();
        this.shoppingListRepo = new ShoppingListRepository();
        this.shoppingListRepo.findById(shoppingListId).then((shoppingList: ShoppingList) => {
            this.ShoppingList = shoppingList;
        });
    }

    get ShoppingList(): ShoppingList{
        return this.shoppingList;
    }

    set ShoppingList(value: ShoppingList){
        this.shoppingList = value;
        this.notifyPropertyChange('ShoppingList', value);
    }

    isShoppingListPresent(): boolean{
        return this.ShoppingList !== undefined;
    }
}