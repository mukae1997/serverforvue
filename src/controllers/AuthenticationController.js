const  {User} = require('../models');
const db = require('../models/index');
const jwt = require('jsonwebtoken');
const config = require('../config/config')



function  jwtSignUser(user) {
 const ONE_WEEK = 60*60*24*7
 return jwt.sign(user, config.authentication.jwtSecret, {
  expiresIn: ONE_WEEK
 })
}



module.exports = {
      async  register (req, res) {
      try  {
       const user = await User.create(req.body);
       res.status(200).send(user.toJSON());

    } catch (e) {
     console.log(e);
     res.status(400).send({
      error:'Duplicated'
     });
    }

    },
    async login(req, res) {

     try  {
      console.log("> Auth controleer: LOGIN");
      const {email, password} = req.body;
      const user = await User.findOne({
       where: {
        email:email
       }
      });
      // console.log(user);
      if (!user) {
       res.status(403).send({
        error:' Login Fail '
       })
      }

      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
       res.status(403).send({
        error:' Login Fail: Wrong Password '
       })
      }
       // successfuld
      res.status(200).send({
       user: user.toJSON(),
       token: jwtSignUser(user.toJSON())
      });

   } catch (e) {
    console.log('> LOGIN error of :', req.body)
    console.log('> LOGIN error:', e)
    res.status(500).send({
     error:'Login Failed: Unknow Reason.'
    });
   }

    }
};
