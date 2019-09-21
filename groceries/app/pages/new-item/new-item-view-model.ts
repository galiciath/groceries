import { Observable } from "tns-core-modules/ui/page/page";
import { Unit } from '../../models/units';

export class NewItemViewModel extends Observable{
    
    private units: string[] = [ 'Kilogram', 'Gram', 'Stuks', 'Sneetjes'];

    get Units(): string[]{
        return this.units;
    }
}