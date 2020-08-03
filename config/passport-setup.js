const passport = require('passport');
const express = require("express");
const authRoutes = require("../routes/auth-routes");
const app = express();

const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const Database = require('../model/database_schema');

passport.serializeUser((db,done)=>{
    done(null,db.id);
});

passport.deserializeUser((id,done)=>{
    Database.findById(id).then((db)=>{
        done(null,db);
    })
})

passport.use(new GoogleStrategy({

    //options for the google strategy.
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientId,
    clientSecret:keys.google.clentSecret

},(accessToken,refreshToken,profile,done)=>{
    console.log(profile);
    const email= profile.emails[0];
    // const img = profile.photos[0];
    
    
    var str = email.value;
    console.log(str);
    if(str.includes("@ggits.net")){
        Database.findOne({google_id:profile.id}).then((currentDb)=>{
            if(currentDb){
                console.log("user is",currentDb);
                console.log(currentDb._id)
                done(null,currentDb);
            }else{
                 new Database({
                    google_id:profile.id,
                    email_id:email.value,
                    username:profile.displayName,
                    thumbnail:profile._json.picture,
                    Student_name:profile.displayName,
                    Student_roll:"",
                    Institute_name:"",
                    University_name:"",
                    Branch_name:"",
                    Complaint:[{complan:"",complaint_priority:""}],
                    Complain_domain:"String",
                    Complaint_priority:"String",
                    Complaint_action:"String",
                    Complaint_track:"String",
                    Complaint_forward:"String",
                    Complaint_status:"String",
                    Subordinate:"asas",
                    }).save().then(function(newDb){
                    console.log('data added ', JSON.stringify(newDb));
                    done(null, newDb);
                    console.log(newDb._id);
    
                })
            }
        })
    }
    else{
       done(null);

    }
    // Database.findOne({google_id:profile.id}).then((currentDb)=>{
    //     if(currentDb){
    //         console.log("user is",currentDb);
    //         console.log(currentDb._id)
    //         done(null,currentDb);
    //     }else{
    //          new Database({
    //             google_id:profile.id,
    //             email_id:email.value,
    //             username:profile.displayName,
    //             thumbnail:profile._json.picture,
    //             Student_name:profile.displayName,
    //             Student_roll:"",
    //             Institute_name:"",
    //             University_name:"",
    //             Branch_name:"",
    //             Complaint:[{complan:"",complaint_priority:""}],
    //             Complain_domain:"String",
    //             Complaint_priority:"String",
    //             Complaint_action:"String",
    //             Complaint_track:"String",
    //             Complaint_forward:"String",
    //             Complaint_status:"String",
    //             Subordinate:"asas",
    //             }).save().then(function(newDb){
    //             console.log('data added ', JSON.stringify(newDb));
    //             done(null, newDb);
    //             console.log(newDb._id);

    //         })
    //     }
    // })
})
)