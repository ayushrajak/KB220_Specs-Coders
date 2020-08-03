const router = require('express').Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended:true});
const Forum  = require('../model/forum_schema');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
// var global;

var search;

router.get('/',(req,res)=>{
    // console.log(global)
    Forum.find({}, function(err,found){
        if(err){
            console.log(err);
            res.status(500).send();
                       
        } else{
            
            // console.log(found.length);
            
            search =found;
            // console.log(found.JSON);
          const global = found
          res.render('forum',{list:search})
        //   console.log(global["name"])
        //    const complaint = dare[0]["Complaint"];
        //    console.log(complaint [4]["complan"])
        //    console.log(dare[0]["Complaint"])   
        }
    })
   
    // res.send(req.user.Complaint_status);
});

router.post('/fill',urlencodedParser,(req,res)=>{
    const data =req.body;
console.log(data);
    new Forum({
        name:data.forname,
        expierience:data.forexp,
        complain:data.forcom,
        category:data.forcat,
        university:data.foruni,        
    }).save()


})
router.post('/search',urlencodedParser,(req,res)=>{
    const data =req.body;
console.log(data.keyword);
Forum.find({}, function(err,found){
    if(err){
        console.log(err);
        res.status(500).send();
                   
    } else{
        
        // console.log(found.length);
        
        
        // console.log(found.JSON);
      const global = found
      global["word"]=data.keyword;
      search["word"]=data.keyword;
      res.render('forumsearch',{list:search})
    //   console.log(global["name"])
    //    const complaint = dare[0]["Complaint"];
    //    console.log(complaint [4]["complan"])
    //    console.log(dare[0]["Complaint"])   
    }
})
router.get('/search',(req,res)=>{
    res.render('forumsearch',{list:search})
});
})
module.exports = router;
