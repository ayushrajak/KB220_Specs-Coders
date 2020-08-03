const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const complaintRoutes = require("./routes/complaint-routes");
const adminHome = require("./routes/adminhome-routes");
const adminuniverse = require("./routes/adminuniver-routes");
const Contactus = require("./routes/chatbot-routes");
// const adminunisearch = require('./routes/adminunisearch-routes');
const ForumRoutes = require("./routes/forum-routes");

const app = express();
const mongoose = require("mongoose");
const Database = require("./model/database_schema");
const passportSetup = require("./config/passport-setup");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: true });

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
app.use(express.static("./public"));
const port = process.env.PORT || 3000
//console.log(port)
/*setting the view engine*/
app.set("view engine", "ejs");

/*setting the cookies*/
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

/*adding a middle ware*/
app.use(passport.initialize());
app.use(passport.session());

/* creating an authentication routes*/
app.use("/auth", authRoutes);

/*creating a profile route*/
app.use("/profile", profileRoutes);

/*creating a route to lodge complaint*/
app.use("/profile/complaint", complaintRoutes);


/*creating a contactus route*/
app.use("/chatbot", Contactus);

/*creating a rouute to admin page*/
app.use("/admin", adminHome);

/* creating a route to forum*/

app.use("/forum",ForumRoutes)

/*creating a route to sort university level complaint of admin*/
app.use("/admin/university", adminuniverse);

/* searching the university in the admin side of the panel */
app.use("/admin/university/search", adminuniverse);

/*databse connect atlas*/
// process.env.MONGODB_URL
// const MONGO_URL = "mongodb+srv://gapp:sushant123@cluster0.zrmwb.mongodb.net/testaroo?retryWrites=true";
// mongoose.connect(MONGO_URL, () => {
//   console.log("connected to mongodb");
// });
/*database connect local*/
mongoose.connect("mongodb://localhost/testaroo", () => {
  console.log("connected to mongodb");
});

/*home page*/
app.get("/", function (req, res) {
  res.render("index", { user: req.user });
});

//creating a route to chatbot
app.get("/chatbot", (req, res) => {
  res.render("chatbot");
});

// creating a route to about us page
app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

// creating a route to about us page
app.get("/adminLogin", (req, res) => {
  res.render("adminLogin");
});

app.get("/dashboard",(req,res)=>{

  //    const complaint = dare[0]["Complaint"];
  //    console.log(complaint [4]["complan"])
  //    console.log(dare[0]["Complaint"])
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
 
        res.render("dashboard",{list:dare});

    }
})


// res.render("dashboard")
});

app.get("*", (req, res) => {
  res.render("404");
});
/* admin dashboard*/
//admin dashboard


/*port connection*/
app.listen(port, () => {
  console.log("server working on "+port);
  // console.log(gid)
});
