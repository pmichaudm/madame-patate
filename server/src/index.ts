
import express, {Express} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import rootRouter from "./routes/root/root";

const PORT: number = 3000;

const onSuccess = function (): void {
    console.log();
    console.log();
}

const onError = function (): void {
    console.log();
}

async function start(): Promise<void> {
    try {
        const app: Express = express();
        dotenv.config();
        app.use(cors());

        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
        });

        app.use(bodyParser.json({
            limit: '500kb',
        }));

        // Register routes
        app.use('/', rootRouter);
        // Add other routes here
        app.listen(PORT);

    } catch (error) {
        console.log(error);
    }
}

start().then(() => onSuccess()).catch(() => onError());
