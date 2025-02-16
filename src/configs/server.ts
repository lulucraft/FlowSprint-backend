import { Express } from 'express';

const port = process.env.PORT || 3000;

const listenToServer = (app: Express) => {
    // Server listening
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}

export default listenToServer;