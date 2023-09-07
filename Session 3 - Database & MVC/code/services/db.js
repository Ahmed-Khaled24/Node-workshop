const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_URL);

async function connectToDb() {
	await client.connect();
	console.log("database connected");
}

/**
 * @param {string} collectionName
 */
function getCollection(collectionName) {
	const db = client.db(process.env.DATABASE_NAME);
	const collection = db.collection(collectionName);
	return collection;
}

module.exports = {
	connectToDb,
	getCollection,
};
