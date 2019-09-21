import { Frame, EventData, Page, NavigationEntry } from "tns-core-modules/ui/frame/frame";
import { NewListViewModel } from "./new-list-viewmodel";
import { ShoppingList } from "~/models/shoppinglist";

let frame: Frame = undefined;
let page: Page = undefined;
let viewModel: NewListViewModel = new NewListViewModel();

export function onPageLoaded(args: EventData): void{
    page = args.object as Page;
    page.bindingContext = viewModel;
    frame = page.frame;
}

export function onNavBackTap(args: EventData): void{
    frame.goBack();
}

export async function onCreateTap(): Promise<void>{
  try {
    let shoppingList: ShoppingList = await viewModel.createList();  
    let navEntry: NavigationEntry = {
      context: {'shoppingListId': shoppingList.Id},
      moduleName: 'pages/shopping-list/shopping-list-page'
    }
    frame.navigate(navEntry);  
    
  } catch (error) {
      console.log(error);
  }
}
