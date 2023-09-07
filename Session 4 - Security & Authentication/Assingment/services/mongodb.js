const { MongoClient } = require("mongodb");

let mongoClient = new MongoClient(process.env.DB_URL);

async function connectMongoDB() {
	try {
		await mongoClient.connect();
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log(error);
	}
}

async function disconnectMongoDB() {
	try {
		await mongoClient.close();
		console.log("Disconnected from MongoDB");
	} catch (error) {
		console.log(error);
	}
}

function getDbCollection(collectionName) {
	try {
		let db = mongoClient.db(process.env.DB_NAME);
		let collection = db.collection(collectionName);
		return collection;
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	connectMongoDB,
	disconnectMongoDB,
	getDbCollection,
};
