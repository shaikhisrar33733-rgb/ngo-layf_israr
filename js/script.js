// ===============================
// NGO WEBSITE JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("NGO Website JavaScript Loaded");


    // ===============================
    // SMOOTH NAVIGATION
    // ===============================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // ===============================
    // START BUTTON
    // ===============================

    const startButton = document.getElementById("startButton");

    if (startButton) {

        startButton.addEventListener("click", function () {

            alert(
                "Thank you for supporting Lok Adhikar Youth Foundation!"
            );

        });

    }


    // ===============================
    // JOIN US POPUP
    // ===============================

    const joinUsBtn =
        document.getElementById("joinUsBtn");

    const volunteerModal =
        document.getElementById("volunteerModal");

    const closeModal =
        document.getElementById("closeModal");

    const volunteerForm =
        document.getElementById("volunteerForm");


    // ===============================
    // OPEN JOIN US POPUP
    // ===============================

    if (joinUsBtn && volunteerModal) {

        joinUsBtn.addEventListener("click", function (event) {

            event.preventDefault();

            volunteerModal.classList.add("active");

            // LOCK BACKGROUND SCROLL
            document.body.style.overflow = "hidden";

        });

    }


    // ===============================
    // CLOSE JOIN US POPUP
    // ===============================

    if (closeModal && volunteerModal) {

        closeModal.addEventListener("click", function () {

            volunteerModal.classList.remove("active");

            // ENABLE BACKGROUND SCROLL
            document.body.style.overflow = "";

        });

    }


    // ===============================
    // CLOSE POPUP BY CLICKING OUTSIDE
    // ===============================

    if (volunteerModal) {

        volunteerModal.addEventListener("click", function (event) {

            if (event.target === volunteerModal) {

                volunteerModal.classList.remove("active");

                // ENABLE BACKGROUND SCROLL
                document.body.style.overflow = "";

            }

        });

    }


    // ===============================
    // CLOSE POPUP WITH ESC KEY
    // ===============================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && volunteerModal) {

            volunteerModal.classList.remove("active");

            // ENABLE BACKGROUND SCROLL
            document.body.style.overflow = "";

        }

    });


    // ===============================
    // OPEN JOIN US POPUP ON PAGE LOAD
    // ===============================

    if (volunteerModal) {

        volunteerModal.classList.add("active");

        // LOCK BACKGROUND SCROLL
        document.body.style.overflow = "hidden";

    }


    // ===============================
    // JOIN US FORM SUBMIT
    // ===============================

    if (volunteerForm && volunteerModal) {

        volunteerForm.addEventListener("submit", function (event) {

            event.preventDefault();


            // GET FORM VALUES

            const name =
                document.getElementById("volunteerName").value.trim();

            const email =
                document.getElementById("volunteerEmail").value.trim();

            const message =
                document.getElementById("volunteerMessage").value.trim();


            // CHECK REQUIRED FIELDS

            if (!name || !email || !message) {

                alert("Please fill in all the fields.");

                return;

            }


            // SUCCESS MESSAGE

            alert(
                "Thank you " +
                name +
                "! Your JOIN US form has been submitted successfully."
            );


            // RESET FORM

            volunteerForm.reset();


            // CLOSE POPUP

            volunteerModal.classList.remove("active");

            // ENABLE BACKGROUND SCROLL
            document.body.style.overflow = "";

        });

    }


    // ===============================
    // ADOPT A CHILD BUTTON
    // ===============================

    const adoptChildBtn =
        document.getElementById("adoptChildBtn");

    if (adoptChildBtn) {

        adoptChildBtn.addEventListener("click", function (event) {

            event.preventDefault();

            alert(
                "Thank you for your interest in adopting a child. More information will be available soon."
            );

        });

    }


    // ===============================
    // PROGRAM DONATE BUTTONS
    // ===============================

    const donateButtons =
        document.querySelectorAll(".programButton");

    donateButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            alert(
                "Thank you for your interest in supporting Lok Adhikar Youth Foundation!"
            );

        });

    });


    // ===============================
    // EDUCATION LEARN MORE
    // ===============================

    const educationButton =
        document.querySelector(".educationButton");

    if (educationButton) {

        educationButton.addEventListener("click", function (event) {

            event.preventDefault();

            const joinSection =
                document.getElementById("join");

            if (joinSection) {

                joinSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    // ===============================
    // FOOTER SUBSCRIBE FORM
    // ===============================

    const subscribeForm =
        document.querySelector(".subscribe");

    if (subscribeForm) {

        subscribeForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput =
                subscribeForm.querySelector("input[type='email']");

            if (emailInput && emailInput.value.trim()) {

                alert(
                    "Thank you for subscribing to Lok Adhikar Youth Foundation!"
                );

                subscribeForm.reset();

            }

        });

    }

});

// ===============================
// DONATION POPUP
// ===============================

const donationBtn =
    document.getElementById("donationBtn");

const donationModal =
    document.getElementById("donationModal");

const closeDonation =
    document.getElementById("closeDonation");

const donationForm =
    document.getElementById("donationForm");


// ===============================
// OPEN DONATION POPUP
// ===============================

if (donationBtn && donationModal) {

    donationBtn.addEventListener("click", function (event) {

        event.preventDefault();

        donationModal.classList.add("active");

        // LOCK BACKGROUND SCROLL
        document.body.style.overflow = "hidden";

    });

}


// ===============================
// CLOSE DONATION POPUP
// ===============================

if (closeDonation && donationModal) {

    closeDonation.addEventListener("click", function () {

        donationModal.classList.remove("active");

        // ENABLE BACKGROUND SCROLL
        document.body.style.overflow = "";

    });

}


// ===============================
// CLOSE BY CLICKING OUTSIDE
// ===============================

if (donationModal) {

    donationModal.addEventListener("click", function (event) {

        if (event.target === donationModal) {

            donationModal.classList.remove("active");

            // ENABLE BACKGROUND SCROLL
            document.body.style.overflow = "";

        }

    });

}


// ===============================
// CLOSE WITH ESC KEY
// ===============================

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        donationModal &&
        donationModal.classList.contains("active")
    ) {

        donationModal.classList.remove("active");

        // ENABLE BACKGROUND SCROLL
        document.body.style.overflow = "";

    }

});


// ===============================
// DONATION FORM SUBMIT
// ===============================

if (donationForm && donationModal) {

    donationForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // GET FORM VALUES

        const name =
            document.getElementById("donorName").value.trim();

        const email =
            document.getElementById("donorEmail").value.trim();

        const amount =
            document.getElementById("donationAmount").value.trim();

        const message =
            document.getElementById("donationMessage").value.trim();


        // CHECK REQUIRED FIELDS

        if (!name || !email || !amount) {

            alert("Please fill in Name, Email ID and Donation Amount.");

            return;

        }


        // SUCCESS MESSAGE

        alert(
            "Thank you " +
            name +
            " for your generous donation of ₹" +
            amount +
            "!"
        );


        // RESET FORM

        donationForm.reset();


        // CLOSE POPUP

        donationModal.classList.remove("active");

        // ENABLE BACKGROUND SCROLL
        document.body.style.overflow = "";

    });

}