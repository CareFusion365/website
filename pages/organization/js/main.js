

let auth_state = {}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function showToast(type, message) {
    if (type == "success") {
        toastr.success(message)
    } else {
        toastr.error(message)
    }
}



document.getElementById("add-organization-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    let organization_name = document.getElementById("organization-name").value;
    let organization_email = document.getElementById("organization-email").value;

    //work on logic for https
    let organization_website = document.getElementById("organization-website").value;

    console.log("ORGANIZATION", organization_website);

    if (!organization_website.startsWith("http") || !organization_website.startsWith("https")) {
        console.log("startsWith")
        organization_website = "https://" + organization_website
    }

    let address = document.getElementById("address").value;
    let contact = document.getElementById("contact").value;
    let description = document.getElementById("description").value;

    let admin_auth_data = JSON.parse(sessionStorage.getItem("authData"))


    if (!organization_name || !address) {
        document.getElementById("organization-name").classList.add("input-error")

        document.getElementById("address").classList.add("input-error")

        showToast("error", "Name and address of organization is required")
    }
    else {
        let request_body = {
            admin: admin_auth_data,
            name: organization_name,
            website: organization_website,
            email: organization_email,
            type: "healthcare_provider",
            description,
            // part_of: 0,
            organization_contact: [
                {
                    organizational_contact_telecom: [
                        {
                            value: contact,
                            use: "work"
                        }
                    ],
                    // purpose: "strings",
                    // name: "strings",
                    // address: "strings",
                    // period: "strings"
                }
            ],
            organization_qualification: [],
            location: [],
        }

        await axios.post("http://localhost:8000/api/organizations/", request_body)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    sessionStorage.setItem("authData", JSON.stringify({}));
                    showToast("success", "Admin account created successfully")

                    setTimeout(()=>{
                        window.location.href = "/pages/organization/organization-review.html"
                    }, 2000)
                }
            })
            .catch(error => {
                console.log("ERROR",error);
                showToast("error","Something went wrong please try again")
            })
    }



})