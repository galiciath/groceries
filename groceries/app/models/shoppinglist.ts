export class ShoppingList {

    private name: string;

    constructor(name: string) {
        this.Name = name;
    }

    get Name(): string{
        return this.name;
    }

    set Name(value: string){
        this.name = value;
    }

}