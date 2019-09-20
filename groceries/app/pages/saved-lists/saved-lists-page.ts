import { SavedListsViewModel } from "./saved-lists-view-model";
import { Page, EventData } from "tns-core-modules/ui/page/page";
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view"
import { Frame, NavigationEntry } from "tns-core-modules/ui/frame/frame";
import { ShoppingList } from "~/models/shoppinglist";

let viewModel: SavedListsViewModel= undefined;
let page: Page = undefined;
let frame: Frame = undefined;

export function onPageLoaded(args: EventData){
    viewModel = new SavedListsViewModel();
    page = args.object as Page;
    frame = page.frame;
    page.bindingContext = viewModel;
}

export function onListItemTap(args: ItemEventData){
    let tapedShoppingListId: number = args.view.bindingContext['id'] as number;
    let navEntry: NavigationEntry = {
        context: {'shoppingListId': tapedShoppingListId},
        moduleName: 'pages/shopping-list/shopping-list-page'
    }
    frame.navigate(navEntry);
}

