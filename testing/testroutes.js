const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


//// Variables for Temp Storage
// Counter to assign id to new users
let numUsers  = 0;
// Array of users
let testUsers = [];
// Counter to assign id to new instances
let numInsts  = 0;
// Array of instances
let testInsts = [];
// Id counter for profiles
let numProfs  = 0;
// Array of profiles
let tempProfs = [];
// Id counter for posts
let numPosts  = 0;
// Array of posts
let tempPosts = [];
// Id counter for comments
let numComms  = 0;
// Array of comments
let tempComms = [];

//// Profiles
// #region GET Profiles
router.get("/001/profile", (req, res) => {      //Show all profiles
    res.json(testUsers);
})
router.get("/001/profile/:id", (req, res) => {  //Get profile based on id
    res.json(testUsers[req.params.id]);
})
// #endregion GET Profiles

// #region POST Profile
router.post("/001/profile", (req, res) => {     //New profile
    //Add profile to database
    testUsers.push({
    user  : req.body.user,
    pass  : req.body.pass,
    email : req.body.email,
    id    : numUsers++
    });
    //Get a login token??
    testUsers[numUsers - 1].token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    //Send back userid and login token
    res.json({
        id    : testUsers[numUsers - 1].id,
        token : testUsers[numUsers - 1].token
    });
})
// #endregion POST Profile

//// Instances
// #region GET Instances

module.exports = router;