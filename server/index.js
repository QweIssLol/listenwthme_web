const express = require("express");
require(dotenv).config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.DB_LINK;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const authRouter = require("./router/auth");

const app = express();
const port = process.env.PORT || 8080;

const router = express.Router();

app.use(express.json());

// default /api path for simple using api calls
app.use("/api", router);

// authentication router
router.use("/auth", authRouter);

app.listen(port, async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    } finally {
        await client.close();
    }

    console.log(`Server is running on http://localhost:${port}`);
});
