// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';
// import { DataSource } from 'typeorm';
// import "reflect-metadata";

// dotenv.config();

// MySQL connection
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     port: Number(process.env.DB_PORT),
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// pool.getConnection((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('[mysql]: Connected to MySQL database');
// });
// export default pool;

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: process.env.DB_HOST || "localhost",
//     port: Number(process.env.DB_PORT) || 3306,
//     username: process.env.DB_USER || "root",
//     password: process.env.DB_PASS || "",
//     database: process.env.DB_NAME || "flowsprint",
//     synchronize: true, // ⚠️ En prod, remplace par des migrations
//     logging: false,
//     entities: ["src/entities/**/*.ts"],
// });
