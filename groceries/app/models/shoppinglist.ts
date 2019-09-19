import { Observable } from "tns-core-modules/ui/page/page";

export class ShoppingList extends Observable{

    private id: number;

    private name: string;

    private createdAt: Date;

    constructor(name: string) {+
        super();
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

    get CreatedAtLocaleString(): string {
        if(this.CreatedAt === undefined){
            return undefined;
        }
        return `${this.CreatedAt.getDate()}-${this.CreatedAt.getMonth()}-${this.CreatedAt.getFullYear()}`;
    }

    set CreatedAt(value: Date){
        this.createdAt = value;
    }


}