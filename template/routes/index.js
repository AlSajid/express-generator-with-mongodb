import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

var router = express.Router();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* GET home page. */
router.get('/', function (request, response, next) {
  response.sendFile(path.join(__dirname, '../public/home.html'));
});



export default router;