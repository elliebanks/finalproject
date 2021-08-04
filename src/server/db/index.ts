import * as mysql from 'mysql'
import Recipes from './recipes'

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'recipelover',
    password: 'password',
    database: 'fromskratch'
})

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