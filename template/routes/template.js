import express from 'express';
import database from '../db/mongodb.js';
var router = express.Router();

const collection = database.collection("collection");

try {
    router.post('/', async (request, response) => {

    });

    router.get('/', async (request, response) => {

    })

    router.delete('/:id', async (request, response) => {

    });
}
catch (error) {
    console.error(error);
}

export default router;
