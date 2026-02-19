import express from 'express';
import router from './routes';
import cors from "cors";
import { errorHandler } from './middlewares/error-handler';

function createApp(){
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api", router);

    app.use(errorHandler);

    return app;
}

export default createApp;
