$(".name").hide();
$(".addButton").click(function() {
  $(".name").show();
  $(".buttons").hide();
    const table = document.querySelector('table');
   if (table) {
    table.remove();
  }
});

$(".nameButton").click(function() {
 var studentName = document.getElementById("studentName").value;
console.log(studentName);
if (studentName !== "") {
  // Validate student name
   var regex = /^[a-zA-Z]+\s[a-zA-Z]+$/i;// Regex to match "First Name Last Name" format
  if (regex.test(studentName)) {
    // If student name is valid, save to local storage and redirect
    localStorage.setItem("studentName", JSON.stringify(studentName)); 
    console.log(studentName,"name"); 
    window.location.href = "./Pages/addName.html?name=" + encodeURIComponent(studentName);
  } else {
    alert("Please enter a valid student name in the format of 'First Name Last Name'");
  }
} else {
  alert("Please enter student name");
}

});














$(".showButton").click(function() {
  
console.log("I'm here");

// Get the student name from localStorage
var studentName = localStorage.getItem("studentName");

// Get the stored courses for the current student
var storedCourses = localStorage.getItem("undefined");

if (storedCourses === null) {
console.log("No courses found for " + studentName);
return;
}

// Find the grades table or create a new one
var table = document.getElementById("gradesTable");
if (!table) {
table = document.createElement("table");
table.id = "gradesTable";
document.body.appendChild(table);
} else {
// Clear the existing contents of the table
while (table.rows.length > 0) {
table.deleteRow(0);
}
}

// Create a new row for the student in the table
var row = table.insertRow(-1);
var nameCell = row.insertCell(0);
nameCell.innerHTML = studentName;

// Add the stored courses to the second cell
var coursesCell = row.insertCell(1);
coursesCell.innerHTML = storedCourses;

// Add a delete button to the third cell
var deleteCell = row.insertCell(2);
var deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
deleteButton.classList.add("button");
deleteButton.onclick = function() {
table.deleteRow(row.rowIndex);
localStorage.removeItem(studentName);
};
deleteCell.appendChild(deleteButton);
console.log("Student Name: " + studentName);

});




