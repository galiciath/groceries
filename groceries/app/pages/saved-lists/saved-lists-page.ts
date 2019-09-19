import { SavedListsViewModel } from "./saved-lists-view-model";
import { Page, EventData } from "tns-core-modules/ui/page/page";

let viewModel: SavedListsViewModel= undefined;
let page: Page = undefined;

export function onPageLoaded(args: EventData){
    viewModel = new SavedListsViewModel();
    page = args.object as Page;
    page.bindingContext = viewModel;
}

