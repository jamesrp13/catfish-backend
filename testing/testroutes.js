const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

//Profiles
router.get("/001/profile", (req, res) => {
    res.json({
        "user": "Username",
        "pass": "Password"
    })
})
router.post("/001/profile", (req, res) => {//New profile
    // const user = req.body.user;
    // const pass = req.body.pass;
    const user = "Brandon";
    const pass = "2139847532405824756";
    const total = {
        "Username": user,
        "Password": pass,
    };
    res.json(total);
    // res.json(req);
})


module.exports = router;