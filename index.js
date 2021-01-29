const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient 
const passport = require('passport');
const session = require('cookie-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const path = require('path')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret : "Our little Secret Here",
  resave : false,
  saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());



app.listen(process.env.PORT || 5000, function(){  
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); 

MongoClient.connect('mongodb+srv://Registration:charangoc30@cluster0.fga0d.mongodb.net/Registration?retryWrites=true&w=majority'
,{
  useUnifiedTopology: true
}).then(client => {
    console.log('Connected to Database');
    const db = client.db('Students');

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  })

  passport.use(new GoogleStrategy({
      clientID        : '364666460910-2oc6p3bv5gksk6317rspfem897rvns12.apps.googleusercontent.com',
      clientSecret    : 'zvUMuk3kjsy2kPxp9Hv8hLz1',
      callbackURL     : 'https://socdashboard.herokuapp.com/auth/google/callback',
      userProfileURL  : 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
    function(token, refreshToken, profile, done) {
      console.log('HI');
      console.log(profile);
      

      
      db.collection('users').findOne({ googleid : profile.id } , function(err, user) { 
          if (err)
              return done(err);
          else if (user) {
              console.log('user');
              return done(null, user);
          } 
          else {
              console.log('ELSE');
              db.collection('users').insertOne({
              "googleid" : profile.id,
              "token" : token,
              "name"  : profile.displayName,
              "email" : profile.emails[0].value,
              "photo" : profile.photos[0].value
              })
              console.log(profile.emails[0].value);
              return done(null, user);
              
          }
      })    
    }
  ))

  app.get('/auth/google', 
    passport.authenticate('google', { scope : ['profile', 'email'] })
  );

  app.get('/auth/google/callback', 
        passport.authenticate('google', {
            failureRedirect: '/auth/google'
        }) ,
          (req, res) => {
              console.log("login done");
              res.redirect('/');
             
          }
  );

  app.get("/user", (req, res) => {
    res.send(req.user);
  });
  
  app.post('/submit1', (req, res)=>{
    var update = { $set : {
      "week1.$.qone": req.body.qone,
      "week1.$.qtwo": req.body.qtwo,
      "week1.$.qthree": req.body.qthree,
      "week1.$.qfour": req.body.qfour,
      "week1.$.qfive": req.body.qfive,
      "week1.$.qsix": req.body.qsix,

    } };
    
    
    db.collection('users').findOneAndUpdate(
      { "email" : req.user.email },
      update, function(err,doc) {
        if (err) {
          return next(err);
        } else {
         console.log(doc);
         alert('Submirtted Successfully');
         res.redirect('/admin/Form1', 200,  {userData:user});
        }
      })
  })
 
  
  app.get('/logout', (req, res) => {
    if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        res.render('/');
      }
    });
  }
  })

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

 
})