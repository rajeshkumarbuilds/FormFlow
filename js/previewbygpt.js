function getData(key) {
    const data = localStorage.getItem(key);

    if (!data) {
        return {};
    }

    return JSON.parse(data);
}


function displayData(containerId, data) {

    const container = document.querySelector(containerId);

    container.innerHTML = "";

    for (const [key, value] of Object.entries(data)) {

        const row = document.createElement("div");

        row.classList.add("detail-row");

        row.innerHTML = `
            <span class="label">${formatLabel(key)}</span>
            <span class="value">${value}</span>
        `;

        container.appendChild(row);
    }
}


function formatLabel(key) {

    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, char => char.toUpperCase());
}


// Get saved data
const personalData = getData("personalData");
const educationData = getData("educationData");
const documentsData = getData("documentsData");


// Display it
displayData("#personalPreview", personalData);
displayData("#educationPreview", educationData);
displayData("#documentsPreview", documentsData);