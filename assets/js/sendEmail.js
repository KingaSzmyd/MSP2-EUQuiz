function sendMail(contactForm) {
    emailjs.send("service_q0o23pa", "eu_quiz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.request.value
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