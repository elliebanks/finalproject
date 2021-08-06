import * as mysql from 'mysql'
import Recipes from './recipes'
require('dotenv').config();

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: 3306
});

connection.connect(function(err)  {    
    if(err) throw err;
    console.log(`Database Connected!`);      
});

export const Query = (query: string, values?: Array<string | number>) =>{
    return new Promise<Array<any>>((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) return reject(err)
            return resolve(results)
        })
    })
}


export default {
    Recipes
}