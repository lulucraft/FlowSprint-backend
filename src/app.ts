import express, { Express } from "express";
import dotenv from "dotenv";
import registerRoutes from "@configs/routes";
import listenToServer from "@configs/server";
import { AppDataSource } from "@configs/data-source";

dotenv.config();

const app: Express = express();

// Requests in JSON format
app.use(express.json());

// Routes
registerRoutes(app);

// MySQL connection
// connectToDB();
AppDataSource.initialize()
    .then(() => console.log("📦 Database connected!"))
    .catch((error) => console.log("Database connection error: ", error));

// Server listening
listenToServer(app);

export default app;