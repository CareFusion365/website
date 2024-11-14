document.addEventListener("DOMContentLoaded", function() {
   
    console.log("HTML fully loaded");
    let access_token = sessionStorage.getItem("access_token")
    let refresh_token = sessionStorage.getItem("refresh_token")
    
    if(!access_token){
        window.location.href= "/pages/admin-auth/admin-auth-login.html"
    }
    
    console.log(access_token,refresh_token)
  });