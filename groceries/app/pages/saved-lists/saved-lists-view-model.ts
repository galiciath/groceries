import { Observable } from "tns-core-modules/ui/page/page";
import { ShoppingList } from "~/models/shoppinglist";
import { ShoppingListRepository } from "~/repositories/shoppinglist-repository";

export class SavedListsViewModel extends Observable {

    private shoppingLists: ShoppingList[] = [];
    private shoppingListsRepository: ShoppingListRepository;

    constructor() {
        super();
        this.shoppingListsRepository = new ShoppingListRepository();
        try{
            this.shoppingListsRepository.findAll();
        } catch(error) {
            console.log(error);
        }
        
    }

    get ShoppingLists(): ShoppingList[]{
        return this.shoppingLists;
    }

    set ShoppingLists(value: ShoppingList[]){
        this.shoppingLists = value;
    }

}