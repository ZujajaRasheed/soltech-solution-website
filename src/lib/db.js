import mysql from 'mysql2/promise'
import * as schema from '@/schema'
import { drizzle } from 'drizzle-orm/mysql2'

let pool=mysql.createPool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME

})
export const db=drizzle(pool,{schema,mode:"default"})