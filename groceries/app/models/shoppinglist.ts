export class ShoppingList {

    private id: number;

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

    get Id(): number{
        return this.id;
    }

    set Id(value: number){
        this.id = value;
    }


}