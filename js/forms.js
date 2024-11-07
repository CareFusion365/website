document.getElementById('waitlistForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    const formAction = `https://docs.google.com/forms/d/e/1FAIpQLSdj9IUfhc0IhzZh13-N1kzNGL8ME1iYOoL_cLnCTps0P5T_MA/viewform?usp=pp_url&entry.715831605=${email}&entry.801251707=${name}`

    window.open(formAction, '_blank');

})
