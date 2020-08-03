
jQuery(document).ready(function(){
      
    jQuery('#forumfor').on('submit', function(){
    // alert("Complaint submitted succesfully Please Refresh OR return to Homepage")
    var name = jQuery('#forname').val();
    var complain = jQuery('#forcom').val()
    var expierience = jQuery('#forexp').val()
    // var fn = jQuery('#fn').val()
    // var data = e.target.dataset.email;
    // alert(data)
    // var emal =jQuery('#email').val(); 
    var category = jQuery('#forcat').val();
    var university = jQuery('#foruni').val();
    // var prio = jQuery( "#slct option:selected" ).text();
    // var level = jQuery( "#mainlevel option:selected" ).text();
    // var category = jQuery( "#category option:selected" ).text();
    // var identity = jQuery("#anoy option:selected").text();
    var todo = {forname: name,forcom:complain,forexp:expierience,forcat:category,foruni:university};
    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username : "specscoders2@gmail.com",
    //     Password : "Specscoders./",
    //     To : emal,
    //     From : "specscoders@gmail.com",
    //     Subject : "Email Regarding your Complain",
    //     Body : com,
    //     }).then(
    //         message => alert("Complaint submitted succesfully and mail sent successfully Please Refresh OR return to Homepage ")
    //     );
    //   console.log(todo)
    alert(todo.forname)
    jQuery.ajax({
    type: 'POST',
    url: '/forum/fill',
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