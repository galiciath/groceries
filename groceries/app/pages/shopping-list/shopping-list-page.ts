import { NavigatedData, Page } from "tns-core-modules/ui/page/page";
import { Frame, NavigationEntry } from "tns-core-modules/ui/frame/frame";
import { ShoppingListViewModel } from "./shopping-list-view-model";

let page: Page = undefined;
let frame: Frame = undefined;
let viewModel: ShoppingListViewModel = undefined;

export function onNavigatedTo(args: NavigatedData): void{
    let shoppingListId: number = args.context['shoppingListId'] as number;
    viewModel = new ShoppingListViewModel(shoppingListId);
    page = args.object as Page;
    page.bindingContext = viewModel;
    frame = page.frame;
}

export function onNavBackTap(): void{
    let navEntry: NavigationEntry = {
        moduleName: 'pages/home/home-page',
        clearHistory: true
    };
    frame.navigate(navEntry);
}