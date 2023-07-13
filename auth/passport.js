//js
const bcrypt = require("bcryptjs");
LocalStrategy = require("passport-local").Strategy;
//Load model
const User = require("../models/User");
const loginCheck = async passport =>  {
  passport.use(
    new LocalStrategy({ usernameField: "email" },  (email, password, done) => {
      //Check customer
         User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            console.log("wrong email");
            return done();
          }
          //Match Password
          bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) throw error;
            if (isMatch) {
              return done(null, user);
            } else {
              console.log("Wrong password");
              return done();
            }
          });
        })
        .catch((error) => console.log(error));
    })
  );
  passport.serializeUser( (user, done) => {
     done(null, user.id);
  });
  await passport.deserializeUser(  async(id, done) => {
   const us = await User.findById(id)
   if(!us){
    return done()
   }
   return done(null,us)
    });

};
module.exports = {
  loginCheck,
};