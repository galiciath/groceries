/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as application from "tns-core-modules/application";
let SQLite = require('nativescript-sqlite');

//set parameter true to delete all tables
bootup(false);

async function initDatabase():  Promise<void>{
    let sql = "CREATE TABLE IF NOT EXISTS shoppinglists " +
              "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
              "name varchar(255), created_at DATE)"
    try{
        let dbConnection = await new SQLite("groceries.db");
        console.log('Database connection established');
        await dbConnection.execSQL(sql);
    } catch(error){
        console.log('Database error:')
        console.log(error);
    }
}

async function dropTables(): Promise<void>{
    let dropShoppingListsStatement: string = "DROP TABLE shoppinglists";
    let dbConnection = await new SQLite("groceries.db");
    await dbConnection.execSQL(dropShoppingListsStatement);
    console.log("database cleared");
}

async function bootup(cleanup: boolean) {
    if(cleanup){
        await dropTables();
    }
    await initDatabase();
    application.run({ moduleName: "app-root" });
}

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
