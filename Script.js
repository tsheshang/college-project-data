const students = [];
const form = document.getElementById("studentForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const course = document.getElementById("course").value;
  const agree = document.getElementById("agree").checked;
  const genderRadio = document.querySelector('input[name="gender"]:checked');
  const gender = genderRadio ? genderRadio.value : null;

  if (!validateForm(name, email, age, gender, course, agree)) {
    return;
  }

  const studentData = { name, email, age, gender, course };
  students.push(studentData);

  console.log(students);

  renderStudents();

  form.reset();
});

function validateForm(name, email, age, gender, course, agree) {
  if (!name || !email || !age || !gender || !course || !agree) {
    alert("Please fill all fields correctly and agree to the terms.");
    return false;
  }

  if (name.length < 3) {
    alert("Name must be at least 3 characters.");
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }

  if (age < 18 || age > 100) {
    alert("Age must be between 18 and 100.");
    return false;
  }

  return true;
}

function renderStudents() {
  output.innerHTML = "";

  students.forEach((student, index) => {
    const studentDiv = document.createElement("div");
    studentDiv.classList.add("studentCard");
    studentDiv.innerHTML = `
      <p><strong>#${index + 1}</strong></p>
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Email:</strong> ${student.email}</p>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Gender:</strong> ${student.gender}</p>
      <p><strong>Course:</strong> ${student.course}</p>
    `;
    output.appendChild(studentDiv);
  });
}