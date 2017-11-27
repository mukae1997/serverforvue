const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const WorksController = require('./controllers/WorksController')
const ImageController = require('./controllers/ImageController')

const {upload} = require('./app')

module.exports = (app) => {
 app.post('/register',
 AuthenticationControllerPolicy.register, // middle ware
 AuthenticationController.register),
 app.post('/login',
 AuthenticationController.login),
 app.get('/works', WorksController.index),
 app.post('/works', WorksController.post),


 app.get('/img', ImageController.getAllImg),
 app.get('/img/:id', ImageController.getOneImg),
 app.delete('/img/:id', ImageController.deleteImg),

 app.post('/img', upload.single('image'), ImageController.postImg)

}
