document.getElementById('waitlistForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    const formAction = `https://docs.google.com/forms/d/e/1FAIpQLSfUwTkV8s08inHwzWzqhkupaP17dsMQK_vxhx2yYOvP_Wqxbw/viewform?usp=pp_url&entry.2130784172=${email}&entry.2005620554=${name}`

    window.open(formAction, '_blank');

})
