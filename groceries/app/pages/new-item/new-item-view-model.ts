import { Observable } from "tns-core-modules/ui/page/page";
import { NavigationEntry, topmost, Frame } from "tns-core-modules/ui/frame/frame";
import { ShoppingItemRepository } from "~/repositories/shoppingitem-repository";
import { onNavBackTap } from "../shopping-list/shopping-list-page";

export class NewItemViewModel extends Observable{
    
    private productName: string;
    private quantity: number;
    private shoppingListId: number;
    private selectedUnit: string;
    private showSave: boolean = false;
    private units: string[] = [ 'Kilogram', 'Gram', 'Stuks', 'Sneetjes'];
    private shoppingItemRepo: ShoppingItemRepository;

    public constructor(shoppingListId: number){
        super();
        this.shoppingListId = shoppingListId;
        this.shoppingItemRepo = new ShoppingItemRepository();
    }

    public onSaveItemTap() {
        this.shoppingItemRepo.addNewItem(this.shoppingListId, this.productName, this.quantity, this.selectedUnit)
            .then(() => this.onNavigateBackTap()); 
    }

    public onNavigateBackTap() {
        let navContext: object = {
            'shoppingListId': this.shoppingListId
        }
        let navEntry: NavigationEntry = {
            moduleName: 'pages/shopping-list/shopping-list-page',
            context: navContext
        }
        let frame: Frame = topmost();
        frame.navigate(navEntry);
    }

    get Units(): string[]{
        return this.units;
    }

    get ShowSave(): boolean{
        return this.showSave;
    }

    set ShowSave(value: boolean){
        this.showSave = value;
    }

    get ProductName(): string{
        return this.productName;
    }

    set ProductName(value: string){
        this.productName = value;
        this.onPropertyChange();
    }

    get Quantity(): number{
        return this.quantity;
    }

    set Quantity(value: number){
        if(!value) {
            value = 0;
        }
        this.quantity = value;
        this.onPropertyChange();
    }
  
    get SelectedUnit(): string{
        return this.selectedUnit;
    }

    set SelectedUnit(value: string){
        this.selectedUnit = value;
        this.onPropertyChange();
    }

    private onPropertyChange() {
        if(this.selectedUnit !== '' && this.productName !== '' && this.quantity > 0){
            this.ShowSave = true;
        } else {
            this.ShowSave = false;
        }
    }

   

    

}