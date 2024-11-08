


function showToast(type, message) {
    if (type == "success") {
        toastr.success(message)
    } else {
        toastr.error(message)
    }
}


document.getElementById("auth-register-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!firstname || !lastname || !email || !mobile || !password) {
        document.getElementById("firstname").classList.add("input-error")

        document.getElementById("lastname").classList.add("input-error")


        document.getElementById("email").classList.add("input-error")


        document.getElementById("password").classList.add("input-error")


        document.getElementById("mobile").classList.add("input-error")


        document.getElementById("error-text").hidden = false

        showToast("error", "All fields are required")
    }
    else if (!emailRegex.test(email)) {
        document.getElementById("email").classList.add("input-error");
        document.getElementById("email-label").classList.add("label-error");

    } else {
        showToast("success", "Admin account created successfully")
        window.location.href = "/pages/organization/add-organization.html"
        //axios functionality;
        // await axios.post("", {firstname, lastname, email, mobile, password})
        // .then(response=>{
        //     console.log(response)
        // })
    }


    
})