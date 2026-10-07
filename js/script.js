console.log("this is formflow.")

const declaration = document.getElementById("declaration");
const startForm = document.getElementById("startForm");

if (declaration && startForm) {

    declaration.addEventListener("change", () => {
        console.log(declaration.checked);
        if (declaration.checked) {
            startForm.classList.add("enabled")
            startForm.setAttribute("aria-disabled", "false");

        }
        else {
            startForm.classList.remove("enabled")
            startForm.setAttribute("aria-disabled", "true");

        }
    })
    startForm.addEventListener("click", (e) => {
        if (!declaration.checked) {
            e.preventDefault();
        }
    })
}

// personal.js

let personalForm = document.querySelector("#form")
let nextEducation = document.querySelector("#next")
if (personalForm && nextEducation) {
    let personalFormSubmitted = false;
    personalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(personalForm)
        let data = Object.fromEntries(formData.entries())
        console.log(data);
        localStorage.setItem("personalData", JSON.stringify(data))
        personalFormSubmitted = true;
        nextEducation.classList.add("enabled")

    })
    nextEducation.addEventListener("click", (e) => {
        if (!personalFormSubmitted) {
            e.preventDefault();
        }
    })
}

// get the data back
let personalDataFetch = JSON.parse(localStorage.getItem("personalData"));
if (personalDataFetch) {
    for (const key in personalDataFetch) {
        let input = document.querySelector(`[name="${key}"]`)
        if (input) {
            input.value = personalDataFetch[key]
            nextEducation.classList.add("enabled")
        }
    }

}
// education.js
let educationForm = document.querySelector("#educationForm")
let nextDocument = document.querySelector("#next")
if (educationForm && nextDocument) {
    let educationFormSubmitted = false;
    educationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(educationForm)
        let data = Object.fromEntries(formData.entries())
        console.log(data);
        localStorage.setItem("educationData", JSON.stringify(data))
        educationFormSubmitted = true;
        nextDocument.classList.add("enabled")

    })
    nextDocument.addEventListener("click", (e) => {
        if (!educationFormSubmitted) {
            e.preventDefault();
        }
    })
}

// get the data back
let educationDataFetch = JSON.parse(localStorage.getItem("educationData"));
if (educationDataFetch) {
    for (const key in educationDataFetch) {
        let input = document.querySelector(`[name="${key}"]`)
        if (input) {
            input.value = educationDataFetch[key]
            educationFormSubmitted = true;
            nextDocument.classList.add("enabled")

        }
    }
}



// document.js
let haryanaResident = document.getElementById("haryanaResident");
let haryanaResidentCertificate = document.getElementById("haryanaResidentCertificate");
let residenceFile = document.getElementById("residenceFile");
let next = document.getElementById("next");
let residenceNumber = document.getElementById("residenceNumber");

const pdfInput = document.querySelectorAll(".pdfFile");


if (haryanaResident && haryanaResidentCertificate) {

    // Haryana resident selection
    haryanaResident.addEventListener("change", (e) => {

        if (e.target.value === "no") {
            haryanaResidentCertificate.style.display = "none";
            residenceFile.required = false;
            residenceNumber.required = false;
        }
        else {
            haryanaResidentCertificate.style.display = "grid";
            residenceNumber.required = true;
            residenceFile.required = true;
        }

    });


    
        let documentFormSubmitted = false;

        // Form submission
        documentForm.addEventListener("submit", (e) => {

            e.preventDefault();

            let formData = new FormData(documentForm);
            let data = Object.fromEntries(formData.entries());

            console.log(data);

           saveFile(data)

            next.classList.add("enabled");

            documentFormSubmitted = true;
        });


        // Next button
        next.addEventListener("click", (e) => {

            if (!documentFormSubmitted) {
                e.preventDefault();
            }

        });

}
const print = document.querySelector(".print")
print.addEventListener("click",()=>{
    window.print()
})