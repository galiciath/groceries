/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as application from "tns-core-modules/application";
let sqLite = require('nativescript-sqlite');

initDatabase();
application.run({ moduleName: "app-root" });

function initDatabase(): void {
    console.log('<------------------------------Database Start--------------------------->')
    let sql = "CREATE TABLE IF NOT EXISTS shoppinglists " +
              "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
              "name varchar(255))"

    new sqLite("groceries.db").then(db => {
        db.execSQL(sql).then(db => console.log("success")).catch(error => console.log(error))
    })
}

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
