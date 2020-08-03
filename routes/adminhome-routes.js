const router = require('express').Router();



router.get('/',(req,res)=>{
res.render('admin');
    // res.send(req.user.Complaint_status);
    });

    module.exports=router;