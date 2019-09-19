import { Observable } from "tns-core-modules/ui/page/page";
import { ShoppingList } from "~/models/shoppinglist";

export class NewListViewModel extends Observable {

    private listName: string = "";

    isInputValid(): boolean {
        return this.ListName !== '';
    }

    async createList(): Promise<ShoppingList> {
        if(!this.isInputValid()) {
            throw new Error();
        } else {
            return new ShoppingList(this.ListName);
        }
    }

    get ListName(): string {
        return this.listName;
    }

    set ListName(value: string) {
        this.listName = value;
    }
}