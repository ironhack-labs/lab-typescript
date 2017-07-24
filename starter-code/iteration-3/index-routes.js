/*jshint esversion: 6*/

const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('../helpers/passport');
const auth    = require('../helpers/auth');
const Job = require('../models/jobs');
const multer = require('multer');
const Picture = require('../models/picture');
const upload = multer({ dest: './public/uploads/' });
const uploadResume = multer({ dest: './public/uploads/Resumes' });
const CV = require('../models/cv');

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: H O M E   P A G E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
router.get('/', (req, res, next) => {
  res.render('index', { title: 'JoBot' });
});
//
// ──────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: L O G I N   A U T H E N T I C A T I O N : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────
//
router.post("/", passport.authenticate("local", {
  successRedirect: "/userProfile",
  failureRedirect: "/",
  failureFlash: true, //disable/enable flash messaging but need flash package
  passReqToCallback: true
}));

// ──────────────────────────────────────────────────────────────── III ──────────
//   :::::: U S E R   P R O F I L E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
router.get('/userProfile', auth.checkLoggedIn('You must be logged in','/'),function(req,res,next){
  let userID = req.session.passport.user._id;
  User.findById(userID)
  .populate('cvs')
  .populate('avatar')
  .populate('jobsApplied')
  .exec(function(err,user){
    if(err) {return next(err);}
    res.render('userProfile',{user});
  });
});

router.post('/userProfile/:id/delete', (req,res,next)=>{
  const resumeID = req.params.id;
  const userID = req.session.passport.user._id;
  User.findByIdAndUpdate( userID, {$pull: {cvs:resumeID}},{new: true}, function (err, job){
    if(err) {
      return next(err);
    } else {
      User.findById(userID)
      .populate('cvs')
      .populate('avatar')
      .exec(function(err, user) {
        if (err){ return next(err); }
        res.redirect('/userProfile');
        });
      }
    }
  );
});

router.post('/userProfile', (req,res,next)=>{
  const userID = req.session.passport.user._id;

  const updateProfile = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    occupation: req.body.occupation,
    phone: req.body.phone,
    address:{
      street: req.body.street,
      number: req.body.streetnumber,
      city: req.body.city,
      Country: req.body.country,
      zip: req.body.zip
    }
  };
console.log(updateProfile);
  User.findByIdAndUpdate(userID, updateProfile, (err,user)=>{
    if(err){return next(err);}
    res.redirect('/userProfile');
  });
});


// ────────────────────────────────────────────────────────── IV ──────────
//   :::::: D A S H B O A R D : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
router.get('/dashboard', auth.checkLoggedIn('You must be logged in', '/'), function (req, res, next) {
  let userID = req.session.passport.user._id;
  User.findById(userID)
    .populate('jobsApplied')
    .populate('avatar')
    .exec(function(err, user) {
      if (err){ return next(err); }
      res.render('dashboard', {user});
    });
});

router.post('/dashboard/:id/delete', (req,res,next)=>{
  const jobID = req.params.id;
  const userID = req.session.passport.user._id;
  User.findByIdAndUpdate( userID, {$pull: {jobsApplied:jobID}}, function (err, job){
    if(err) {
      return next(err);
    } else {
      User.findById(userID)
      .populate('jobsApplied')
      .populate('avatar')
      .exec(function(err, user) {
        if (err){ return next(err); }
        res.redirect('/dashboard');
      });
    }
  }
);
});
// ──────────────────────────────────────────────────── V ──────────
//   :::::: S E A R C H : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────

router.get('/search', auth.checkLoggedIn('You must be logged in', '/'), function(req, res, next) {
  res.render('search', { user: JSON.stringify(req.user) });
});

router.post('/search', (req, res, next) => {
  let userSearchQuery = req.body.userSearchQuery;
  console.log("userSearchQuery", req.body.userSearchQuery);
  console.log('SEAEAARRRCH ME BEAUTIES!!!! SEARCH!!!!');
  // db.jobs.find({$text: {"$search": " \" Madrid \" \" Uber \" "}}).pretty()
  // db.jobs.find({$text: {"$search": "\"Madrid\"\"Uber\""}}).pretty()
  Job.find({$text: {$search: req.body.userSearchQuery}}, (err, result) => {
    console.log("result", result);
    req.session.success = result; //Save data
    res.redirect('/job_display');
  });
});

// ────────────────────────────────────────────────────────────── VI ──────────
//   :::::: J O B   D I S P L A Y : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────

router.get('/job_display', auth.checkLoggedIn('You must be logged in', '/'), (req, res, next)=> {
  const userID = req.session.passport.user._id;
  const user = req.session.passport.user;
  const jobsApplied = user.jobsApplied;
  const jobs = req.session.success;

  User.findById(userID)
  .exec(function(err,user){
    if(err){return next(err);}
      let userArray = user.jobsApplied;
      res.render('job_display', { jobs, userArray, user });
  });
});

router.post('/job_display/:id', (req,res,next)=>{
  const jobID = req.params.id;
  const userID = req.session.passport.user._id;

  User.findByIdAndUpdate( userID, {$push: {jobsApplied:jobID}}, function (err, job){
    if(err) {
      return next(err);
    }
    else {
        res.redirect('/job_display');
    }
  });
});


module.exports = router;
