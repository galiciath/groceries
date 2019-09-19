import { Observable } from "tns-core-modules/ui/page/page";
import { ShoppingList } from "~/models/shoppinglist";
import { ShoppingListRepository } from "~/repositories/shoppinglist-repository";

export class NewListViewModel extends Observable {

    private listName: string = "";

    isInputValid(): boolean {
        return this.ListName !== '';
    }

    async createList(): Promise<ShoppingList> {
        if(!this.isInputValid()) {
            throw new Error();
        } else {
            let shoppinglist = new ShoppingList(this.ListName);
            let repo: ShoppingListRepository = new ShoppingListRepository();
            return await repo.addList(shoppinglist);
        }
    }

    get ListName(): string {
        return this.listName;
    }

    set ListName(value: string) {
        this.listName = value;
    }
}