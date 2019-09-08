import { Frame, EventData, Page } from "tns-core-modules/ui/frame/frame";

let frame: Frame = undefined;

export function onPageLoaded(args: EventData): void {
    let page: Page = args.object as Page;
    frame = page.frame;
}

export function onNavBackTap(args: EventData): void {
    frame.goBack();
}