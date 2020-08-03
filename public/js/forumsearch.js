jQuery(document).ready(function(){

    jQuery('.forumchaljaa').on('submit',function(){
        

        let word = jQuery('.forumchaljaa input');
       
      
        var todo = {keyword:word.val()};
    
        console.log(todo);
        // alert(todo.keyword)
    // alert("You have searched for " + word);
    
    // console.log(json)
    jQuery.ajax({   
    type: 'POST',
    url: '/forum/search',
    data:todo,
    success: function(data){
        console.log("successs ho gyi")
    //do something with the data via front-end framework
    location.replace("/forum/search")
    // location.reload();
    }
    });

        return false;

    });



});