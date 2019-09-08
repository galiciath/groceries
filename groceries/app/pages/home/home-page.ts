import { EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button/button"
import { Frame } from "tns-core-modules/ui/frame/frame";

export function onBtnNewTap(args: EventData) {
    let button: Button = args.object as Button;
    let frame: Frame = button.page.frame;
    frame.navigate('pages/new-list/new-list-page');
}