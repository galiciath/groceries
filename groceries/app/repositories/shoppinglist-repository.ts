import { ShoppingList } from '~/models/shoppinglist';
let SQLite = require('nativescript-sqlite');
const dbName = "groceries.db";

export class ShoppingListRepository {

    async addList(shoppingList: ShoppingList): Promise<ShoppingList>{
        let sqlStatement = `INSERT INTO shoppinglists (name) VALUES ('${shoppingList.Name}')`;
        let connection = await this.getConnection();
        let insertedId = await connection.execSQL(sqlStatement);
        shoppingList.Id = insertedId;
        return shoppingList;
    }

    private getConnection(): Promise<any> {
        return new SQLite(dbName);
    }

}