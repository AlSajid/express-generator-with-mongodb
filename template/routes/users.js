import express from 'express';
import database from '../db/mongodb.js';
import userValidationHandler from '../middlewares/userValidator.js';
var router = express.Router();

//collections
const haiku = database.collection("haiku");


const run = async () => {
    try {

        /* GET users listing. */
        router.get('/', async (request, response, next) => {

            const doc = {
                title: "Record of a Shriveled Datum",
                content: "No bytes, no problem. Just insert a document, in MongoDB",
            }
            const result = await haiku.insertOne(doc);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);

            response.send(result);

        });

        router.post('/',userValidationHandler, async (request, response, next) => {
            console.log("Passed validation");
            response.send({ status: "200" });
        });
    }
    catch (error) {
        console.error(error);
    }
}

run().catch(console.dir);

export default router;
