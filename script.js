/* =========================
   GLOBAL RESET & VARIABLES
========================= */
:root {
  --primary: #2b6cb0;
  --secondary: #edf2f7;
  --accent: #38b2ac;
  --danger: #e53e3e;
  --text-dark: #1a202c;
  --text-light: #718096;
  --white: #ffffff;
  --radius: 10px;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  --transition: 0.25s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--secondary);
  color: var(--text-dark);
  line-height: 1.6;
}

/* =========================
   LAYOUT
========================= */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* =========================
   HEADER / NAVBAR
========================= */
header {
  background: var(--primary);
  color: var(--white);
  padding: 15px 25px;
  box-shadow: var(--shadow);
}

header h1 {
  font-size: 1.5rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
}

nav a {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

nav a:hover {
  opacity: 0.85;
}

/* =========================
   CARDS
========================= */
.card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
}

.card h2 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.card p {
  color: var(--text-light);
}

/* =========================
   STUDENT PROFILE
========================= */
.profile {
  display: flex;
  align-items: center;
  gap: 15px;
}

.profile img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary);
}

.profile h3 {
  margin-bottom: 4px;
}

/* =========================
   TABLES (Grades, Subjects)
========================= */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table thead {
  background: var(--primary);
  color: var(--white);
}

table th,
table td {
  padding: 10px;
  text-align: left;
}

table tbody tr:nth-child(even) {
  background: var(--secondary);
}

/* =========================
   BUTTONS
========================= */
button {
  background: var(--primary);
  color: var(--white);
  border: none;
  padding: 10px 15px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}

button:hover {
  background: #2c5282;
}

button.secondary {
  background: var(--accent);
}

button.danger {
  background: var(--danger);
}

/* =========================
   FORMS
========================= */
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
select,
textarea {
  padding: 10px;
  border-radius: var(--radius);
  border: 1px solid #cbd5e0;
  font-size: 0.95rem;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
}

/* =========================
   ALERTS / ANNOUNCEMENTS
========================= */
.alert {
  padding: 12px 15px;
  border-radius: var(--radius);
  background: #ebf8ff;
  border-left: 4px solid var(--primary);
  margin-bottom: 10px;
}

/* =========================
   FOOTER
========================= */
footer {
  text-align: center;
  padding: 15px;
  color: var(--text-light);
  font-size: 0.85rem;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    gap: 8px;
  }

  header h1 {
    font-size: 1.25rem;
- style.css
Nielmar
from flask import Flask, request, redirect, render_template

app = Flask(_name_)

students = []

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        grade = request.form["grade"]
        subject = request.form["subject"]

        students.append({
            "name": name,
            "grade": grade,
            "subject": subject
        })

        return redirect("/")

    return render_template("index.html", students=students)

if _name_ == "_main_":
    app.run(debug=True)
