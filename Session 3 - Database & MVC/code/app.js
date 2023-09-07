const express = require("express");
const userRouter = require("./routers/users.router");
const app = express();

app.use(express.json());
app.use("/users",userRouter);




module.exports = app


// const PORT = process.env.PORT;

// app.listen(process.env.PORT, () => {
//     console.log(`server listening on port ${process.env.PORT}`);
// });


// app.post("/user", async (req, res) => {
//     const dummyUser = req.body;

//     try {
//         await client.connect();
//         const db = client.db(process.env.DATABASE_NAME);
//         const usersCollection = db.collection("users");

//         const insertOptions = {
//             ordered: false,
//             bypassDocumentValidation: true,
//         };

//         usersCollection.insertOne(dummyUser, insertOptions);

//         // why return?
//         return res.json(`user ${dummyUser.name} added`);
//     } catch (err) {
//         console.log(err.message);
//         return res.status(500).send(err.message);
//     }
// });

// app.get("/user/:name", async (req, res) => {
//     try {
//         const name = req.params.name;
//         await client.connect();
//         const db = client.db(process.env.DATABASE_NAME);
//         const usersCollection = db.collection("users");

//         const query = { name };

//         const queryOptions = {
//             limit: 4,
//             skip: 0,
//             projection: { _id: 0 },
//         };

//         const result = await usersCollection
//             .find(query, queryOptions)
//             .sort({ age: 1 })
//             .toArray();

//         res.send({
//             status: "success",
//             result,
//         });
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).send(err.message);
//     }
// });

// app.patch("/user", async (req, res) => {
//     try {
//         const { update, query } = req.body;

//         await client.connect();
//         const db = client.db(process.env.DATABASE_NAME);
//         const usersCollection = db.collection("users");

//         const newValues = { $set: update };

//         const updateOptions = {
//             multi: true,
//             upsert: true,
//         };

//         const updatedResult = await usersCollection.updateOne(
//             query,
//             newValues,
//             updateOptions
//         );
//         res.json({
//             status: "success",
//             updatedResult,
//         });
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).send(err.message);
//     }
// });

// app.delete("/user/:name", async (req, res) => {
//     try {
//         await client.connect();
//         const query = { name: req.params.name };
//         const db = client.db(process.env.DATABASE_NAME);
//         const usersCollection = db.collection("users");
//         usersCollection.deleteOne(query);
//         return res.send("success");
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).send("failure", err.message);
//     }
// });
