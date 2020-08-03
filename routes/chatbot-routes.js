const router = require('express').Router();

// const authCheck = (req,res,next)=>{
//     if(!req.user){
//         //if user is not logged in 
//         res.redirect('/');

//     }else{
//         next();
//     }
// };

router.get('/chatbot',(req, res)=>{
    res.render('chatbot');
})



module.exports = router;