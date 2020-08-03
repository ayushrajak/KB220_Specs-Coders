// const router = require('express').Router();

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
var search;
var global;
var word;
var date;
Database.find({}, function(err,found){
    if(err){
        console.log(err);
        res.status(500).send();
                   
    } else{
        
        // console.log(found.length);
        
        
        // console.log(found.JSON);
       global = found
    //    const complaint = dare[0]["Complaint"];
    //    console.log(complaint [4]["complan"])
    //    console.log(dare[0]["Complaint"])   
    }
})
// const authCheck = (req,res,next)=>{
//     if(!req.user){
//         //if user is not logged in 
//         res.redirect('/auth/login');

//     }else{
//         next();
//     }
// };


router.get('/',(req,res)=>{
    Database.find({}, function(err,found){
        if(err){
            console.log(err);
            res.status(500).send();
                       
        } else{
            
            // console.log(found.length);
            
            
            // console.log(found.JSON);
           const dare = found
        //    const complaint = dare[0]["Complaint"];
        //    console.log(complaint [4]["complan"])
        //    console.log(dare[0]["Complaint"])
     
            res.render("adminuniver",{list:dare});

        }
    })
    // res.render("adminuniver")
    // res.send(req.user.Complaint);
    });

    
 
router.post('/',urlencodedParser,(req,res)=>{
    const data =req.body;

    // console.log(data);
    // console.log(req.body)
    var d=false
    date = data.date;
    word = data.university;
    if(date!=undefined){
        d = true
    }
    
    console.log(d)
    // console.log(date)
    if(d){
        console.log("THIS PART")
        // console.log(global)
        
        global["date"] =date;
        global["status"] = "datereport"
        // console.log(global.date)
        search =global;
        res.render("adminunisearch",{searchu:global})
    }
else{
    console.log("THAT PART")
        Database.find({'Complaint.category':data.university},function(err,found){
            if(err){
                console.log(err);
                res.status(500).send();
            }
            else{
                // console.log(found);
              search = found;
    
              var l = search[0]['Complaint']
            //   console.log(l)
            //   console.log (word)
              search["word"]=word;
              search["status"] = "wordsearch"
              console.log(search.word)
            res.render("adminunisearch",{searchu:search});
            }
        })
    }
    // Database.find({'Complaint.category':data.university},function(err,found){
    //     if(err){
    //         console.log(err);
    //         res.status(500).send();
    //     }
    //     else{
    //         // console.log(found);
    //       search = found;

    //     //   var l = search[0]['Complaint']
    //     //   console.log(l[0]['category'])
    //     //   console.log (word)
    //       search["word"]=word;
    //       console.log(search.word)
    //     res.render("adminunisearch",{searchu:search});
    //     }
    // })
    // res.render("adminunisearch")

})
router.post('/status',urlencodedParser,(req,res)=>{
    const stat =req.body;
    var key = Object.keys(stat);

    // console.log(key[0])
    // console.log(stat);
    
    Database.updateOne({'Complaint._id': key}, {'$set': {'Complaint.$.complain_status': "Close"}},function(err,model){
        if(err){
            console.log(err);
            return res.send(err);

        }
        console.log("success on closing complain")
        return res.json(model);

    })

})
router.post('/statusf',urlencodedParser,(req,res)=>{
    const stat =req.body;
    var key = Object.keys(stat);

    // console.log(key[0])
    // console.log(stat);
    
    Database.updateOne({'Complaint._id': key}, {'$set': {'Complaint.$.complain_status': "Complain Forwarded"}},function(err,model){
        if(err){
            console.log(err);
            return res.send(err);

        }
        console.log("success on forwarding complain")
        return res.json(model);

    })

})
router.post('/statusr',urlencodedParser,(req,res)=>{
    const stat =req.body;
    var key = Object.keys(stat);

    // console.log(key[0])
    // console.log(stat);
    
    Database.updateOne({'Complaint._id': key}, {'$set': {'Complaint.$.complain_status': "Complain Resolved"}},function(err,model){
        if(err){
            console.log(err);
            return res.send(err);

        }
        console.log("success on resolving complain")
        return res.json(model);

    })

})
router.post('/statusrevi',urlencodedParser,(req,res)=>{
    const stat =req.body;
    // var key = Object.keys(stat);

    // console.log(key[0])
    // console.log(stat.compl_id);
    
    Database.updateOne({'Complaint._id': stat.compl_id}, {'$set': {'Complaint.$.complain_review': stat.review}},function(err,model){
        if(err){
            console.log(err);
            return res.send(err);

        }
        console.log("success on giving review")
        return res.json(model);

    })

})
router.get('/search',(req,res)=>{
    // res.render('searched')

    res.render("adminunisearch",{searchu:search})

})
    module.exports=router;