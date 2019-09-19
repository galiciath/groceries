export class ShoppingList {

    private id: number;

    private name: string;

    private createdAt: Date;

    constructor(name: string) {
        this.Name = name;
        this.createdAt = new Date();
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

    get CreatedAt(): Date{
        return this.createdAt;
    }

    set CreatedAt(value: Date){
        this.createdAt = value;
    }


}