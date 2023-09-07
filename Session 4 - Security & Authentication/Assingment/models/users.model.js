const {getDbCollection} = require('../services/mongodb');
const {ObjectId} = require('mongodb');


async function dbAddNewUser(user){
    const usersCollection = getDbCollection('users');
    const result = await usersCollection.insertOne(user);
    return result;
}

async function dbGetUserByUsername(username){
    const usersCollection = getDbCollection('users');
    const result = await usersCollection.findOne({username: username});
    return result;
}

async function dbGetUserById(id){
    const usersCollection = getDbCollection('users');
    const result = await usersCollection.findOne({_id: new ObjectId(id)});
    return result;
}

async function dbGetUserByEmail(email){
    const usersCollection = getDbCollection('users');
    const result = await usersCollection.findOne({email: email});
    return result;
}

module.exports = {
    dbAddNewUser,
    dbGetUserByUsername,
    dbGetUserById,
    dbGetUserByEmail,
}