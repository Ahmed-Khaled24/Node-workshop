const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const app  = require('./app');
const { connectToDb } = require("./services/db");

const server = http.createServer(app);

(async() => {
    
    await connectToDb();
    server.listen(process.env.PORT, () => {
        console.log(`server listening on port ${process.env.PORT}`);
    });
})()

