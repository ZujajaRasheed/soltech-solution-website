import {int,mysqlTable,varchar,decimal} from 'drizzle-orm/mysql-core'

export const users=mysqlTable("users",{
    id:int("id").primaryKey().autoincrement().notNull(),
    name:varchar("name",{length:100}).notNull(),
    email:varchar("email",{length:255}).notNull(),
    address:varchar("address",{length:100}).notNull(),
    city:varchar("city",{length:50}).notNull(),
    bill:decimal("bill",{precision:10,scale:2}).notNull(),
    rooftype:varchar("rooftype",{length:50}).notNull(),
    shift:varchar("shift",{length:50}).notNull(),
    message:varchar("message",{length:255}).notNull(),
    plan:varchar("plan",{length:50}).notNull(),
    phoneNo:varchar("phoneNo",{length:50}).notNull()
})