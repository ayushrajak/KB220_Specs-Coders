const loginForm = document.querySelector('form')
const email = document.getElementById('email')
const pass = document.getElementById('password')
const popup = document.querySelector('#popup')


function check(form)
{
 
 if(form.email.value == "admin@123" && form.password.value == "admin")
  {
    window.open('/dashboard')
  }
 else
 {
     
popup.textContent = "Invalid Credentuiasl"
  }
}