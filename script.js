// get the input from the form when the submit button gets clicked
const myForm = document.getElementById("my-form");

myForm.onsubmit = (event) => {
  event.preventDefault();

  const fName = document.getElementById("firstName").value;
  const lName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  clearForm();

  console.log({ fName, lName, email, role });

  // Send this employee to POST https://crud-demo-ns.herokuapp.com/employees
  axios
    .post("https://crud-demo-ns.herokuapp.com/employees", {
      fName,
      lName,
      email,
      role,
    })
    .then((res) => {
      console.log(res.data);
    });
};

// When the "Show all employees" button is clicked, show the list off all the employees
document.getElementById("showEmp").addEventListener("click", getEmployees);

function getEmployees() {
  axios.get("https://crud-demo-ns.herokuapp.com/employees").then((res) => {
    const employees = res.data;

    for (let index = 0; index < employees.length; index++) {
      const { fName, lName, email, role } = employees[index];

      let newP = document.createElement("p");
      newP.innerHTML = `${lName}, ${fName} - ${email} - ${role}`;

      document.querySelector("#empContainer").appendChild(newP);
    }
  });
}

function clearForm() {
  document.getElementById("firstName").value;
  document.getElementById("lastName").value;
  document.getElementById("email").value;
  document.getElementById("role").value;
}
