

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
    let organization_alias = document.getElementById("organization-alias").value;
    let organization_website = document.getElementById("organization-website").value;

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
            alias: organization_alias,
            //website: organization_website,
            email: organization_email,
            type: "healthcare_provider",
            description,
            // part_of: 0,
            organization_contact: [
                {
                    organizational_contact_telecom: [
                        {
                            //value: contact,
                            use: "home"
                        }
                    ],
                    // purpose: "strings",
                    // name: "strings",
                    // address: "strings",
                    // period: "strings"
                }
            ],
            organization_qualification: [
                {
                    code: generateRandomString(),
                    period: generateRandomString(),
                    issuer: generateRandomString()
                }
            ],
            location: [
                {
                    // contact: [
                    //     {
                    //         website: "http://localhost:8000/api/docs/#/organizations/organizations_creates",
                    //         email: "users@example.com",
                    //         phone: "strings",
                    //         fax: "strings"
                    //     }
                    // ],
                    name: address,
                    status: "active",
                    operational_status: "closed",
                    alias: generateRandomString(),
                    description: generateRandomString(),
                    mode: "instance",
                    address: generateRandomString(),
                    form: "building",
                    position: generateRandomString(),
                    hours_of_operation: generateRandomString()

                }
            ],
        }

        await axios.post("http://localhost:8000/api/organizations/", request_body)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    sessionStorage.setItem("authData", JSON.stringify({}));
                    showToast("success", "Admin account created successfully")
                    window.location.href = "/pages/organization/organization-review.html"
                }
            })
            .catch(error => {
                console.log("ERROR",error);
                showToast("error","Something went wrong please try again")
            })
    }



})