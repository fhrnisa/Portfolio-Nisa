document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // mencegah reload halaman

    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_vg41cp7", "template_jlf5e7c", parms)
      .then(function (res) {
        alert("Email has been sent. Thank you!");
        form.reset(); // bersihkan form
      })
      .catch(function (err) {
        alert("Failed to send email. Please try again.");
        console.error(err);
      });
  });
});
