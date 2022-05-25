const express =require('express');
const route = express.Router()
const messageController = require('../controller/message');

route.get('/', messageController.homePage)
route.post('/', messageController.postMessage)

route.get('/*', messageController.notFound)



module.exports = route;
