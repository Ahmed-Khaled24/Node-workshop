const { MongoClient } = require("mongodb");

/**
 * @type {MongoClient | null}
 */
let dbConnection = null;

/**
 * This function connects to the database.
 * @returns {Promise<void>}
 */
async function connectMongoDB() {
	if (dbConnection) return dbConnection;
	dbConnection = await MongoClient.connect(process.env.DB_URL);
	console.log("Connected to MongoDB");
}

/**
 * This function closes the connection to the database.
 * @returns {Promise<void>}
 */
async function disconnectMongoDB() {
	if (!dbConnection) return;
	await dbConnection.close();
	dbConnection = null;
	console.log("Disconnected from MongoDB");
}

/**
 * This function returns the connection to the database.
 * @returns {Promise<MongoClient> | MongoClient}
 */
async function getDbConnection() {
	if (dbConnection) return dbConnection;
	dbConnection = await connectMongoDB();
	return dbConnection;
}

module.exports = {
	connectMongoDB,
	disconnectMongoDB,
	getDbConnection,
};
