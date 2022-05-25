let allMessages = [];

const messageModel = require('../models/message');


const homePage = async (req, res) => {
    allMessages = [];
    await messageModel.find()
        .then(result => {
            allMessages.push(result);
            res.render('index', {
                fullName: '',
                isAdmin: true,
                allMessages: result,
                result:''          
            });
        })
        .catch(err => {
            console.log(err)
        })
}
const postMessage = (req, res) => {
    let newMessage = new messageModel(req.body);
    newMessage.save()
        .then( () => {
            
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}
const notFound =  (req, res) => { 
    res.render('notFound')
}
module.exports = {
    homePage,
    postMessage,
    notFound
}