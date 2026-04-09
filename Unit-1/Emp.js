let employess = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if ( name === "" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields properly");
    }

    let employee = {
        name: name,
        Id: empId,
        salary: salary,
        dept: dept
    };

    employess.push(employee);
    alert("Employee added succesfully");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    let output = "<h2>All Employees</h2>";
    
}





