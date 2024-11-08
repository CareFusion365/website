


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
    let address = document.getElementById("address").value;
    let contact = document.getElementById("contact").value;
    let description = document.getElementById("description").value;




    if (!organization_name || !address) {
        document.getElementById("organization-name").classList.add("input-error")

        document.getElementById("address").classList.add("input-error")


      
        showToast("error", "Name and address of organization is required")
    }
    else {
        showToast("success", "Admin account created successfully")
        window.location.href = "/pages/organization/organization-review.html"
        //axios functionality;
        // await axios.post("", {firstname, })
        // .then(response=>{
        //     console.log(response)
        // })
    }


    
})