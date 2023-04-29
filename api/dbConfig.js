// MySQL DB connection
import mysql from 'mysql2'

// Database login
export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "K3ny@tt78",
    database: "adv_web"
})

// Verify Database is connected
connection.connect((err) =>{
    if(err){
        console.error('\n Internal Server Error! \n', err)
        return
    }
        console.log(" \n Database \n -----------------\n Status\t: Running \n Port\t: 3306 \n ----------------- ")
})