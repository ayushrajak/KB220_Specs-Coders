const router = require('express').Router();
const passport = require('passport');
/*auth login through get method*/
router.get('/login',(req,res)=>{
    res.render('index',{user:req.user});
});

/*auth logout*/
router.get('/logout',(req,res)=>{
    //handle with passport
req.logout();
res.redirect('/')
    // res.send('logging out');

})

/*auth with google*/
router.get('/google',passport.authenticate('google',{
    scope:['profile','email']
}));
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    // res.send(req.user);
    // // res.send("hello")

    res.redirect('/profile/');
})
module.exports = router;
