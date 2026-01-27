function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let subject = document.getElementById("subject").value;
    let grade = document.getElementById("grade").value;

    if (name === "" || email === "" || date === "" || subject === "" || grade === "") {
        alert("Please fill out all fields");
        return false;
    }
    
    // Basic email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0 and 100");
        return false;
    }

    addStudent(name, email, date, subject, grade);
    return false; // prevent page reload
}

function addStudent(name, email, date, subject, grade) {
    let status = grade >= 75 ? "Passed" : "Failed";
    let color = grade >= 75 ? "green" : "red";

    let li = document.createElement("li");
    li.style.color = color;
    li.textContent = name + " - " + email + " - " + date + " - " + subject + " - " + grade + " (" + status + ")";

    document.getElementById("studentList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("date").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("grade").value = "";
}