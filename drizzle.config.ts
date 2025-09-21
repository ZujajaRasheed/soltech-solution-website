import {defineConfig} from 'drizzle-kit'

console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_USER)
console.log(process.env.DB_NAME)
console.log(process.env.DB_HOST)
export default defineConfig({
    schema:"./src/schema.ts",
    out :"./drizzle",
    dialect:"mysql",
    dbCredentials:{
host:process.env.DB_HOST!,
password:process.env.DB_PASSWORD!,
user:process.env.DB_USER!,
database:process.env.DB_NAME!,
port:3306,

    }
});