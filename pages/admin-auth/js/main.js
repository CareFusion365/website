


function showToast(type, message) {
    if (type == "success") {
        toastr.success(message)
    } else {
        toastr.error(message)
    }
}


let authRegisterFormElement = document.getElementById("admin-auth-register-form")

if (authRegisterFormElement) {
    authRegisterFormElement.addEventListener("submit", async (event) => {
        event.preventDefault();


        let firstname = document.getElementById("firstname").value;
        let username = document.getElementById("username").value;
        let lastname = document.getElementById("lastname").value;
        let dob = document.getElementById("dob").value;

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!firstname || !lastname || !email || !password) {
            document.getElementById("firstname").classList.add("input-error")
            document.getElementById("lastname").classList.add("input-error")
            document.getElementById("email").classList.add("input-error")
            document.getElementById("password").classList.add("input-error")

            document.getElementById("error-text").hidden = false

            showToast("error", "All fields are required")
        }
        else if (!emailRegex.test(email)) {
            document.getElementById("email").classList.add("input-error");
            document.getElementById("email-label").classList.add("label-error");

        } else {
            sessionStorage.setItem("authData", JSON.stringify({ first_name: firstname, last_name: lastname, username, email, password,date_of_birth:dob }));
            showToast("success", "Admin account created successfully")

            window.location.href = "/pages/organization/add-organization.html"

        }



    })
}



let authLoginFormElement = document.getElementById("admin-auth-login-form")

if (authLoginFormElement) {
    authLoginFormElement.addEventListener("submit", async (event) => {
        event.preventDefault();

        let email = document.getElementById("email-login").value;
        let password = document.getElementById("password-login").value;

        if (!email || !password) {
            document.getElementById("email-login").classList.add("input-error")

            document.getElementById("password-login").classList.add("input-error")

            document.getElementById("error-text-login").hidden = false

            showToast("error", "All fields are required")
        } else {

            await axios.post("http://localhost:8000/api/admins/auth/login", { email, password })
                .then((response) => {

                    if (response.status === 200) {
                        showToast("success", "Login successful");
                        sessionStorage.setItem("refresh_token", response.data.refresh)
                        sessionStorage.setItem("access_token", response.data.access)

                        window.location.href = "/pages/organization/organization-review.html"


                    }
                })
        }
    })
}
