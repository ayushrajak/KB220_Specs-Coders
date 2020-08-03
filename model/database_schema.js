const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*Child Schema */
const childSchema  = new Schema({
    mainlevel:String,
    category:String,
    complan:String,
    complain_status:String,
    complain_priority:String,
    complain_review:String,
    datetime:String,
    name:String,
});

/*Schema defining*/
const schema_database = new Schema({
    google_id:String,
    email_id:String,
    username:String,
    thumbnail:String,
    Student_name:String,
    Student_roll:String,
    Institute_name:String,
    University_name:String,
    Branch_name:String,
    Complaint:[childSchema],
    Complain_domain:String,
    Complaint_priority:String,
    Complaint_action:String,
    Complaint_track:String,
    Complaint_forward:String,
    Complaint_status:String,
    Subordinate:String,
});

const Database = mongoose.model('database',schema_database);
module.exports = Database;



// let database = new Database({
//     google_id:"String",
//     username:"String",
//     thumbnail:"String",
//     Student_name:"String",
//     Student_roll:"String",
//     Institute_name:"String",
//     University_name:"String",
//     Branch_name:"String",
//     Complaint:"String",
//     Complain_domain:"String",
//     Complaint_priority:"String",
//     Complaint_action:"String",
//     Complaint_track:"String",
//     Complaint_forward:"String",
//     Complaint_status:"String",
//     Subordinate:"asas",
  
//     });
//     database.save().then(function(newUser){
//         console.log('data added ', JSON.stringify(newUser));
//     });
