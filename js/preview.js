console.log("this is preview.js")

const fetchData = (key) => {
    let fetchedData = JSON.parse(localStorage.getItem(key))
    // console.log(fetchedData);
    if (!fetchedData) {
        return null;
    }
    return fetchedData;

}
const displayData = (selector, data) => {
    const container = document.querySelector(selector);
    container.innerHTML = "";
    for (const [key, value] of Object.entries(data)) {
        container.innerHTML += `
            <p><strong>${key}:</strong> ${value}</p>
        `;
    }
};



getAllFiles((data) => {

    const documentsPreview = document.querySelector("#documentsPreview");

    if (!documentsPreview) return;

    documentsPreview.innerHTML = "";

    console.log(data[0]);
    
    const formData = data[0];

    const files = [
        {
            name: "Aadhaar",
            file: formData.aadhaarFile
        },
        {
            name: "Income Certificate",
            file: formData.incomeFile
        },
        {
            name: "PPP",
            file: formData.pppFile
        },
        {
            name: "Residence Certificate",
            file: formData.residenceFile
        }
    ];

    files.forEach((item) => {

        // Don't display empty file
        console.log(item);
        
        if (!item.file || item.file.size === 0) return;

        const url = URL.createObjectURL(item.file);

        documentsPreview.innerHTML += `
            <p>
                <strong>${item.name}:</strong>
                ${item.file.name}
                <a href="${url}" target="_blank">Open</a>
            </p>
        `;
    });
});

getAllFiles()
const personalData = fetchData("personalData");
const educationData = fetchData("educationData");

displayData("#personalPreview", personalData)
displayData("#educationPreview", educationData)