const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const posts = [];

app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

app.post("/", (req, res) => {
    const post = req.body.postBody;
    console.log(post);
    posts.push(post);
    // res.setHeader("access-control-allow-origin", "*");
    res.status(201).json("post created");
});
// ...

app.get("/", (req, res) => {
    let postList = "";
    for (let i = 0; i < posts.length; i++) {
        postList += `<li>${posts[i]}</li>`;
    }

    // Return the vulnerable content without proper encoding
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Web Security</title>
        </head>
        <body>
            <h1>XSS Example</h1>
            <ul>${postList}</ul>
        </body>
        </html>
    `);
});

// ...

