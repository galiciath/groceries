import { ShoppingList } from '~/models/shoppinglist';
import { ShoppingListMapper } from '~/utility/mappers/shoppinglist-mapper';
import { Mapper } from '~/utility/mappers/mapper';
let SQLite = require('nativescript-sqlite');
const dbName = "groceries.db";

export class ShoppingListRepository {

    private mapper: Mapper<ShoppingList>;

    constructor(){
        this.mapper = new ShoppingListMapper();
    }

    async findAll(): Promise<ShoppingList[]>{
        let sqlStatement: string = "SELECT * FROM shoppinglists";
        let connection = await this.getConnection();
        let resultSet: Object[] = await connection.all(sqlStatement);
        let shoppingLists: ShoppingList[] = [];
        resultSet.forEach(row => {
            shoppingLists.push(this.mapper.map(row))
        });
        return shoppingLists;
    }

    async addList(shoppingList: ShoppingList): Promise<ShoppingList>{
        let sqlStatement = `INSERT INTO shoppinglists (name, created_at) VALUES ('${shoppingList.Name}', '${shoppingList.CreatedAt.toLocaleDateString()}')`;
        let connection = await this.getConnection();
        let insertedId = await connection.execSQL(sqlStatement);
        shoppingList.Id = insertedId;
        return shoppingList;
    }

    private getConnection(): Promise<any> {
        return new SQLite(dbName);
    }

}