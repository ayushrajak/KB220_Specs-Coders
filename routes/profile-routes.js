const router = require('express').Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended:true});
const Database  = require('../model/database_schema');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


const authCheck = (req,res,next)=>{
    if(!req.user){
        //if user is not logged in 
        res.redirect('/auth/login');

    }else{
        next();
    }
};

// router.get('/',authCheck,(req, res)=>{
//     res.render('trackcomplaint',{list:dare,user:req.user})
// })


router.get('/',authCheck,(req, res)=>{
    Database.findOne({_id:req.user.id},'Student_name Complaint',function(err,found){
        if(err){
            console.log(err);
            res.status(500).send();
                       
        }else{
            const dare = found;
            console.log(dare._id);
            res.render('trackcomplaint',{list:dare,user:req.user})
        }
    })

});

module.exports = router;