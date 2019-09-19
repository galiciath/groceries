import { Frame, EventData, Page } from "tns-core-modules/ui/frame/frame";
import { NewListViewModel } from "./new-list-viewmodel";

let frame: Frame = undefined;
let page: Page = undefined;
let viewModel: NewListViewModel = new NewListViewModel();

export function onPageLoaded(args: EventData): void {
    page = args.object as Page;
    page.bindingContext = viewModel;
    frame = page.frame;
}

export function onNavBackTap(args: EventData): void {
    frame.goBack();
}

export async function onCreateTap(): Promise<void> {
  try {
    let shoppingList = await viewModel.createList();  
    frame.navigate("pages/shopping-list/shopping-list-page");  
    
  } catch (error) {
      console.log('empty name')
  }
}
