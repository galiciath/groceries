let SQLite = require('nativescript-sqlite');
const dbName = "groceries.db";

export class ShoppingItemRepository {


    /*findAllItemByShoppingListId(shoppingListId: number){

    }*/

    async addNewItem(shoppingListId: number, productName: string, quantity: number, unit: string): Promise<void> {
        let sqlStatement = `INSERT INTO shoppingitems(shopping_list_id, product_name, quantity, unit) VALUES ('${shoppingListId}', '${productName}', '${quantity}', '${unit}');`;
        let connection = await this.getConnection();
        await connection.execSQL(sqlStatement); 
    }

    private getConnection(): Promise<any> {
        return new SQLite(dbName);
    }
}