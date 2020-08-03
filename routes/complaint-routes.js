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

                                /*  REGISTER STUDENT COMPLAINT*/
const authCheck = (req,res,next)=>{
    if(!req.user){
        //if user is not logged in 
        res.redirect('/auth/login');

    }else{
        next();
    }
};
router.get('/',authCheck,(req,res)=>{
res.render('lodge_complaint',{user:req.user})
// res.send(req.user.Complaint_status);
});
router.post('/',authCheck,urlencodedParser,(req,res)=>{
    const data =req.body;
    // console.log(req.user);
    if(req.user){
        Database.findOneAndUpdate({University_name:req.user.University_name},{University_name:data.uni}).then(function(){
            console.log('university updated');
            
        });
        Database.findOneAndUpdate({Institute_name:req.user.Institute_name},{Institute_name:data.insti}).then(function(){
            console.log('institute updated');
            
        });
        Database.findOneAndUpdate({Branch_name:req.user.Branch_name},{Branch_name:data.branch}).then(function(){
            console.log('branch updated');
            
        });
        Database.findOneAndUpdate({Student_roll:req.user.Student_roll},{Student_roll:data.enroln}).then(function(){
            console.log('roll no  updated');
            
        });
        Database.findOne({_id:req.user.id}).then(function(record){
            // console.log(record.Complaint[0]);
        //  Database.Complaint.push(data.complat)

         if (Array.isArray(record.Complaint)) {
            var d= new Date();
            d=d.toDateString();
            d = d.substring(4);
            console.log(d);
            record.Complaint.push({complan:data.complat,complain_priority:data.priority,complain_status:"Not Resolved",complain_review:"",datetime:d,
            category:data.cate,mainlevel:data.mainlev,name:data.ide})
                        record.save(function(err,record){
                if(err) throw err;
                console.log("yessssss")
                // console.log(record)
            })
        } else {
            record.Complaint = [data.complat];
        }
        // const subdoc = record.Complaint

        //   console.log(subdoc)
            console.log("complaint updated")
         });
         

      

    }
    // if(req.user){
      
    // }

})
// router.post('email',authCheck,urlencodedParser,(req,res)=>{
//     const data =req.body;
//     console.log(req.user);
//     if(req.user){
//         console.log("hello ayush mishra")
//     }
// });
module.exports = router;
