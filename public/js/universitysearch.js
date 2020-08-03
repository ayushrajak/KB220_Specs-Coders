jQuery(document).ready(function(){
    jQuery('#day').on("submit",function(){
        let day = jQuery("#dar option:selected").text();
        // day = new Date();
        // alert(day);
        if(day == "Today"){
            day = new Date();
            day=day.toDateString();
            day = day.substring(4);
        }
        else{
            day = new Date();
            day=day.toDateString();
            day = day.substring(4);
            var cut = day;
            cut = cut.substring(4,7)
            var d = parseInt(cut)
            d=d-1;
            cut = d.toString();
            cut = day.substring(0,5)+cut+day.substring(6)
            alert (cut)
            day =cut
        }
        var todo = {date:day};
        // alert(day)
        jQuery.ajax({   
            type: 'POST',
            url: '/admin/university',
            data:todo,
            success: function(data){
                console.log("successs ho gyi")
            //do something with the data via front-end framework
            location.replace("/admin/university/search")
            // location.reload();
            }
            });
        
                return false;
    
    })
    jQuery('#sea').on("submit",function(){

        let tech = jQuery( "#slct option:selected" ).text();
       
      
        var todo = {university:tech};
    
        console.log(todo);
    alert("You have selected the university - " + tech);
    
    // console.log(json)
    jQuery.ajax({   
    type: 'POST',
    url: '/admin/university',
    data:todo,
    success: function(data){
        console.log("successs ho gyi")
    //do something with the data via front-end framework
    location.replace("/admin/university/search")
    // location.reload();
    }
    });

        return false;

    });
    
});