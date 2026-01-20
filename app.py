from flask import Flask, render_template, request

app = Flask(name)

students = []

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        grade_input = request.form.get('grade')
        
        if name and grade_input:
            grade = int(grade_input)
            status = "Passed" if grade >= 75 else "Failed"
            students.append({'name': name, 'grade': grade, 'status': status})
            
    return render_template('index.html', students=students)

if name == 'main':
    app.run(debug=True)