jQuery(document).ready(function(){
                
    jQuery('.cls').on('click', function(e){
    // alert("idea approvved successfully")
    // var item = jQuery('form input');
       var data = e.target.dataset.complain;
        // console.log(e);


     var ideaappr = jQuery(".compid").text() 
    //  alert(data)
        // console.log(data);
        
    jQuery.ajax({
    type: 'POST',
    url: '/admin/university/status',
    data: data,
    success: function(data){
    //do something with the data via front-end framework
        
    location.reload();
    }

    });

        return false;

    });
    
});
jQuery(document).ready(function(){

jQuery('.frwd').on('click', function(e){
    // alert("idea approvved successfully")
    // var item = jQuery('form input');
       var data = e.target.dataset.complain;
        // console.log(e);


     var ideaappr = jQuery(".compid").text() 
    //  alert(data)
        // console.log(data);
        
    jQuery.ajax({
    type: 'POST',
    url: '/admin/university/statusf',
    data: data,
    success: function(data){
    //do something with the data via front-end framework
        
    location.reload();
    }

    });

        return false;

    });
    jQuery('.res').on('click', function(e){
        // alert("idea approvved successfully")
        // var item = jQuery('form input');
           var data = e.target.dataset.complain;
            // console.log(e);
    
    
         var ideaappr = jQuery(".compid").text() 
        //  alert(data)
            // console.log(data);
            
        jQuery.ajax({
        type: 'POST',
        url: '/admin/university/statusr',
        data: data,
        success: function(data){
        //do something with the data via front-end framework
            
        location.reload();
        }
    
        });
    
            return false;
    
        });

        // jQuery('.revi').on('submit', function(e){
        //     alert("Complaint submitted succesfully Please Refresh OR return to Homepage")
        //     var tech = jQuery(".review").val()               
        //     // alert(tech)
        //     var todo = {review:tech};
        //     // console.log(e.target.dataset.review)
           
        
        //     });
            jQuery('.rev').on('click',function(e){
                e.target.dataset.review = e.target.parentElement.parentElement.firstElementChild.firstElementChild.value
                var todo = {review:e.target.parentElement.parentElement.firstElementChild.firstElementChild.value,compl_id:e.target.dataset.complain}
                jQuery.ajax({
                    type: 'POST',
                    url: '/admin/university/statusrevi',
                    data: todo,
                        // console.log(data.priority)
                
                    success: function(data){
                    //do something with the data via front-end framework
                    location.reload();
                    }
                    });
                
                        return false;
            })

    });
