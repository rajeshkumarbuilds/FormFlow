# FormFlow

### A Multi-Step Form Application with Local Storage & IndexedDB

FormFlow is a browser-based multi-step form application built with **HTML, CSS, and JavaScript**. It allows users to enter personal and educational information, upload documents, preview their application, edit previously entered information, and submit the completed form.

The project focuses on practical implementation of **DOM manipulation, form handling, LocalStorage, IndexedDB, file handling, and multi-page navigation**.

---

## ✨ Features

- 📝 Multi-step application form
- 👤 Personal information management
- 🎓 Education details
- 📍 Address information
- 📄 Document upload
- 💾 Form data persistence using **LocalStorage**
- 🗃️ File storage using **IndexedDB**
- 👀 Application preview before submission
- ✏️ Edit previously entered information
- 🔄 Retrieve saved data when editing
- ✅ Form submission confirmation
- 📱 Responsive and clean user interface

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure and form elements |
| CSS3 | Styling and responsive layout |
| JavaScript | Application logic and DOM manipulation |
| LocalStorage | Storing text/form data |
| IndexedDB | Storing uploaded documents |
| Git & GitHub | Version control and project hosting |

---

## 📂 Project Structure

```text
FormFlow/
│
├── index.html
├── personal.html
├── education.html
├── address.html
├── preview.html
├── submit.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── personal.js
│   ├── education.js
│   ├── address.js
│   ├── preview.js
│   ├── submit.js
│   └── db.js
│
├── assets/
│   └── images/
│
└── README.md
```

> The exact structure may differ depending on your current project files.

---

## 🔄 Application Flow

```text
Personal Details
       ↓
Education Details
       ↓
Address Details
       ↓
Document Upload
       ↓
Preview Application
       ↓
Edit if Required
       ↓
Submit Application
```

---

## 💾 Data Storage

FormFlow uses two browser storage technologies for different types of data.

### LocalStorage

Used for storing lightweight form information such as:

- Name
- Date of birth
- Email
- Phone number
- Education details
- Address details

### IndexedDB

Used for storing uploaded files and documents directly in the browser.

This separation keeps text-based form data and file data organized according to their different storage requirements.

---

## ✏️ Edit Functionality

One of the main features of FormFlow is the ability to edit previously entered information.

When the user selects **Edit**, the application retrieves the saved form data and documents and places the information back into the appropriate form fields.

This creates a more realistic application workflow instead of requiring the user to fill out the entire form again.

---

## 🖼️ Screenshots

### Home / Personal Information

Add your screenshot here:

```markdown
![Personal Information](assets/images/personal.png)
```

### Education Details

```markdown
![Education Details](assets/images/education.png)
```

### Application Preview

```markdown
![Application Preview](assets/images/preview.png)
```

### Submission

```markdown
![Submission](assets/images/submission.png)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/FormFlow.git
```

### 2. Open the project

```bash
cd FormFlow
```

### 3. Run the project

Open the project in **VS Code** and use **Live Server** to run the application.

You can also open `index.html` directly in your browser if your project does not require a local server.

---

## 🎯 What I Learned

While building FormFlow, I practiced:

- DOM manipulation
- JavaScript event handling
- Form validation
- LocalStorage
- IndexedDB
- File objects and file handling
- Asynchronous JavaScript
- Multi-page application flow
- Retrieving and displaying stored data
- Editing previously saved data
- Git and GitHub
- Structuring a real-world frontend project

---

## 🔮 Future Improvements

Possible improvements include:

- Backend integration
- User authentication
- Database integration
- Cloud document storage
- PDF application generation
- Better form validation
- Progress indicator
- Improved mobile responsiveness
- Admin dashboard
- Application tracking system

---

## 👨‍💻 Author

**Rajesh Kumar**

Aspiring Full-Stack / MERN Stack Developer

### Connect With Me

- GitHub: https://www.github.com/rajeshkumarbuilds/
- LinkedIn: https://www.linkedin.com/in/rajesh-builds/

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

### 📌 Project Status

**Completed — continuously improving**

Git & GitHub

Version control and project hosting
