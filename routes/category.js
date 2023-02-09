const express = require('express');
const router = express.Router();


const {
    create
} = require("../controllers/category");

const {requireSignin, isAuth, isAdmin } = require("../controllers/auth")


router.post("/category/create", create);


// router.get("/hello",requireSignin,(req,res)=>{
//   res.send("hello");
// });


  module.exports = router;


