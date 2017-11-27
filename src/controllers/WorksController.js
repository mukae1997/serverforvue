const {
 Code
} = require('../models')




module.exports = {
 async post(req, res) {
  try {
   const code = await Code.create(req.body);
   console.log("> successfully created Work ");
   res.status(200).send(code.toJSON());

  } catch (e) {
   console.log(e);
   res.status(500).send({
    error: '> Creation Error. '
   });
  }

 },
 async index(req, res) {
  try {
   const codes = await Code.findAll({
    limit: 10
   });
   res.status(200).send(codes);
  } catch (e) {
   console.log(e);
   res.status(500).send({
    error: '> Fetch Error.'
   });
  }

 }

};
