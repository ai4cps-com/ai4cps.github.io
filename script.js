document.getElementById("demoForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText =
        "Thank you. Our team will contact you shortly.";
    this.reset();
});