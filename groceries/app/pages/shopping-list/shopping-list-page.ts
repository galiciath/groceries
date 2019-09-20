import { NavigatedData, Page } from "tns-core-modules/ui/page/page";
import { Frame } from "tns-core-modules/ui/frame/frame";
import { ShoppingListViewModel } from "./shopping-list-view-model";

let page: Page = undefined;
let frame: Frame = undefined;
let viewModel: ShoppingListViewModel = undefined;

export function onNavigatedTo(args: NavigatedData) {
    let shoppingListId: number = args.context['shoppingListId'] as number;
    viewModel = new ShoppingListViewModel(shoppingListId);
    page = args.object as Page;
    page.bindingContext = viewModel;
    frame = page.frame;
}