$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
             fname:{
                required:true,
                minlength:4
             },
             email:{
                required:true,
                email:true
             },
             phnum:{
    
                required:true,
                number:true,
               
                minlength:10
             },message:{
                required:true
             }
        },
        messages:{
            fname:{
                required:"This field is Necessary",
                minlength:"Enter full name"
            },
            email:{
                required:"This field is Necessary",
                email:"Enter valid Email"
            },phnum:{
                required:"This field is Necessary",
                minlength:"Enter valid phone number "
            }
           
        }

    }) 
})
