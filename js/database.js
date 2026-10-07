let db;
const dbReady = new Promise((resolve, reject) => {
    const request = indexedDB.open("formFlowDB", 6)
    request.onupgradeneeded = function (event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains('files')) {
            db.createObjectStore('files', { keyPath: 'id', autoIncrement: true });
        }
    };
    request.onsuccess=(event) => {
        db = event.target.result
        resolve(db)
        console.log("db is loaded Succesfully.")

    }
    request.onerror=(event) => {
        reject(event.target.error);

    }
});

// Save file
async function saveFile(file) {
    db = await dbReady;
    if (!db) {
        console.log("Database is not ready");
        return;
    }

    const transaction = db.transaction("files", "readwrite");
    const store = transaction.objectStore("files");

    const request = store.add(file);

    request.onsuccess = function () {
        console.log("File saved:", file.name);
    };

    request.onerror = function (event) {
        console.log("Error saving file:", event.target.error);
    };
}


// Get all files
async function getAllFiles(callback) {
    db = await dbReady;
    if (!db) {
        console.log("Database is not ready");
        return;
    }

    const transaction = db.transaction("files", "readonly");
    const store = transaction.objectStore("files");

    const request = store.getAll();

    request.onsuccess = function (event) {

        const records = event.target.result;

        console.log("Files retrieved:", records);

        callback(records);
    };

    request.onerror = function (event) {
        console.log("Error getting files:", event.target.error);
    };
}
