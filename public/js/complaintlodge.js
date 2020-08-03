// jQuery(document).ready(function(){
      
//     jQuery('form').on('submit', function(){
//     // alert("Complaint submitted succesfully Please Refresh OR return to Homepage")
//     var item = jQuery('form input');
//     var dsc = jQuery('#dsc').val()
//     var tech = jQuery('#tcs').val()
//     // var fn = jQuery('#fn').val()
    
//     var enr = jQuery('#enr').val();
//     var com = jQuery('#com').val();
//     var prio = jQuery( "#slct option:selected" ).text();
//     var todo = {uni: item.val(),insti:dsc,branch:tech,enroln:enr,complat:com,priority:prio};
//        console.log(todo)
//     jQuery.ajax({
//     type: 'POST',
//     url: '/profile/complaint',
//     data: todo,
//          //console.log(data.priority)

//     success: function(data){
//     //do something with the data via front-end framework
//     location.reload();
//     }
//     });

//         return false;

//     });      
// });

jQuery(document).ready(function(){
      
    jQuery('form').on('submit', function(){
    // alert("Complaint submitted succesfully Please Refresh OR return to Homepage")
    var item = jQuery('form input');
    var dsc = jQuery('#dsc').val()
    var tech = jQuery('#tcs').val()
    // var fn = jQuery('#fn').val()
    // var data = e.target.dataset.email;
    // alert(data)
    var emal =jQuery('#email').val(); 
    var enr = jQuery('#enr').val();
    var com = jQuery('#com').val();
    var prio = jQuery( "#slct option:selected" ).text();
    var level = jQuery( "#mainlevel option:selected" ).text();
    var category = jQuery( "#category option:selected" ).text();
    var identity = jQuery("#anoy option:selected").text();
    var todo = {uni: item.val(),insti:dsc,branch:tech,enroln:enr,complat:com,priority:prio,cate:category,mainlev:level,ide:identity};
    Email.send({
        Host: "smtp.gmail.com",
        Username : "specscoders2@gmail.com",
        Password : "Specscoders./",
        To : emal,
        From : "specscoders@gmail.com",
        Subject : "Email Regarding your Complain",
        Body : com,
        }).then(
            message => alert("Complaint submitted succesfully and mail sent successfully Please Refresh OR return to Homepage ")
        );
    //   console.log(todo)
    jQuery.ajax({
    type: 'POST',
    url: '/profile/complaint',
    data: todo,
        // console.log(data.priority)

    success: function(data){
    //do something with the data via front-end framework
    console.log("executed")
    location.reload();
    }
    });

        return false;

    });      
});