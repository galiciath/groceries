import { NavigatedData, Page, getViewById } from "tns-core-modules/ui/page/page";
import { NewItemViewModel } from "./new-item-view-model";
import { DockLayout } from 'tns-core-modules/ui/layouts/dock-layout/dock-layout'

let page: Page = undefined;
let viewModel: NewItemViewModel = undefined;
let dialog: DockLayout = undefined;
let dialogOpen: boolean = false;
let dialogAnimationPlaying = false;

const ANIMATION_DURATION: number = 500; //miliseconds
const LISTPICKER_ANIMATION_INTERVAL: number = 15; //miliseconds
const LISTPICKER_ANIMATION_UNITS: number = 150;

export function onNavigatedTo(args: NavigatedData){
    let shoppingListId: number = args.context['shoppingListId']
    viewModel = new NewItemViewModel(shoppingListId);
    page = args.object as Page;
    page.bindingContext = viewModel;   
    dialog = getViewById(page, "dialog") as DockLayout;
}

export function onUnitTap(): void{
    toggleDialog();
}

function toggleDialog(){
    if(!dialogAnimationPlaying) {
        dialogOpen = !dialogOpen;
        dialogOpen ? openDialog(LISTPICKER_ANIMATION_UNITS, ANIMATION_DURATION) : closeDialog(LISTPICKER_ANIMATION_UNITS, ANIMATION_DURATION);
    }
}

function openDialog(totalUnits: number, animationDuration: number){
    dialogAnimationPlaying = true;
    let unitsPerInterval = (totalUnits / animationDuration) * LISTPICKER_ANIMATION_INTERVAL;
    let startY: number = totalUnits;
    let currentY: number = startY;
    dialog.translateY = startY;
    dialog.visibility = "visible";
    let timer = setInterval(() => {
        if(currentY <= 0){
            clearInterval(timer);
            dialog.translateY = 0;
        } else{
            currentY -= unitsPerInterval;
            dialog.translateY = currentY;
        }
    },LISTPICKER_ANIMATION_INTERVAL)
    dialogAnimationPlaying = false;
}

function closeDialog(totalUnits: number, animationDuration: number){
    dialogAnimationPlaying = true;
    let unitsPerInterval = (totalUnits / animationDuration) * LISTPICKER_ANIMATION_INTERVAL;
    let startY: number = 0;
    let currentY: number = 0;
    dialog.translateY = startY;
    let timer = setInterval(() => {
        if(currentY >= totalUnits){
            clearInterval(timer);
            dialog.visibility = "collapse";
        } else{
            currentY += unitsPerInterval;
            dialog.translateY = currentY;
        }
    },LISTPICKER_ANIMATION_INTERVAL)
    dialogAnimationPlaying = false;
}