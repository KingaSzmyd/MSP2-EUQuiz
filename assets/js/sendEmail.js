function sendMail(contactForm) {
    emailjs.send("gmail", "eu_quiz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "eu_quiz": contactForm.request.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);    
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}