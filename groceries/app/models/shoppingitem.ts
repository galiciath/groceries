import { Unit } from "./units";

export class Item {

    private quantity: number;

    private unit: Unit;

    private complete: boolean;

    constructor(quantity: number, unit: Unit) {
        this.Quantity = quantity;
        this.unit = unit;
        this.Complete = false;
    }

    get Quantity(): number {
        return this.quantity;
    }

    set Quantity(value: number) {
        this.quantity = value;
    }

    get Unit(): Unit{
        return this.unit;
    }

    set Unit(value: Unit){
        this.unit = this.unit;
    }

    get Complete(): boolean{
        return this.complete;
    }

    set Complete(value: boolean){
        this.complete = value;
    }
}