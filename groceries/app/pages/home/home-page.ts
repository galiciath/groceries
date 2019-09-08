import { EventData, Page } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button/button"
import { Frame } from "tns-core-modules/ui/frame/frame";

let frame: Frame = undefined;

export function onPageLoaded(args: EventData): void {
    let page: Page = args.object as Page;
    frame = page.frame;
}

export function onBtnNewTap(args: EventData): void {
    frame.navigate('pages/new-list/new-list-page');
}

export function onBtnListsTap(args: EventData): void {
    frame.navigate('pages/saved-lists/saved-lists-page');
}