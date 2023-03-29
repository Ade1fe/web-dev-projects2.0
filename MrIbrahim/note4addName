

var studentName; 
var storedCourses = [];




$(document).ready(function() {

  $(".nameButton").click(function() {
    studentName = localStorage.getItem("studentName");
    console.log(studentName); // Should log the stored value, if any
    // ... the rest of the code that uses the stored studentName variable
    
  });

  // ... the rest of the code
    // Check if studentName matches localStorage key
//   var storedCourses = JSON.parse(localStorage.getItem(studentName));
    storedCourses = JSON.parse(localStorage.getItem(studentName)) || [];

if (storedCourses) {
  // Add rows for existing courses in localStorage
  var table = document.getElementById("gradesTable");
  for (var i = 0; i < storedCourses.length; i++) {
    var existingCourse = storedCourses[i];
    var existingRow = table.insertRow(-1);
    var existingNameCell = existingRow.insertCell(0);
    var existingScoreCell = existingRow.insertCell(1);
    var existingGradeCell = existingRow.insertCell(2);
    var deleteCell = existingRow.insertCell(3); // Create a new cell for the delete button

    existingNameCell.innerHTML = existingCourse.name.charAt(0).toUpperCase() + existingCourse.name.slice(1);
    existingScoreCell.innerHTML = existingCourse.score;
    existingGradeCell.innerHTML = existingCourse.grade;

    // Add the delete button to the new cell
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
      deleteCourse(this); // Call the deleteCourse function and pass in the button as a parameter
    };
    deleteCell.appendChild(deleteButton);
  }
}
  });

  $("#courseForm").submit(function(event) {
  event.preventDefault(); // prevent page from refreshing

  // your form submission code here
});

   function calculateGrade(score) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

 window.addCourse = function() {
  var courseName = document.getElementById("courseName").value;
  var courseScore = parseInt(document.getElementById("courseScore").value);
  var courseGrade = calculateGrade(courseScore);

  var storedCourses = JSON.parse(localStorage.getItem(studentName));

  if (!storedCourses) {
    var confirmAdd = confirm("No data found for the entered student name. Do you want to add this student to the system?");

    if (confirmAdd) {
      storedCourses = [];
      localStorage.setItem(studentName, JSON.stringify(storedCourses));
    } else {
      return;
    }
  }

  // Check if course already exists in localStorage
  var isCourseExist = false;
  for (var i = 0; i < storedCourses.length; i++) {
    if (storedCourses[i].name.toLowerCase() === courseName.toLowerCase()) {
      alert("Course already exists!");
      isCourseExist = true;
      break;
    }
  }
  
  if (isCourseExist) {
    return;
  }

  // Validate course name
  var courseNameRegex = /^[a-zA-Z]+[a-zA-Z0-9]*$/;
  if (!courseNameRegex.test(courseName)) {
    alert("Please enter a course name that begins with letters and may contain numbers.");
    return;
  }

  // Add course to table and localStorage
  var table = document.getElementById("gradesTable");
  var row = table.insertRow(-1);
  var studentNameCell = row.insertCell(0);
  var nameCell = row.insertCell(0);
  var scoreCell = row.insertCell(1);
  var gradeCell = row.insertCell(2);
  var deleteCell = row.insertCell(3); // Add a new cell for the delete button
  // studentNameCell.innerHTML = studentName;
  nameCell.innerHTML = courseName.charAt(0).toUpperCase() + courseName.slice(1);
  scoreCell.innerHTML = courseScore;
  gradeCell.innerHTML = courseGrade;
  deleteCell.innerHTML = '<button onclick="deleteCourse(this)">Delete</button>'; // Add the delete button and call the deleteCourse function

  var courseInfo = {
    name: courseName,
    score: courseScore,
    grade: courseGrade
  };
  storedCourses.push(courseInfo);
  localStorage.setItem(studentName, JSON.stringify(storedCourses));
  console.log(storedCourses);
};

function deleteCourse(button) {
  var row = button.parentNode.parentNode; // Get the row containing the button
  var courseName = row.cells[0].innerHTML.toLowerCase(); // Get the course name from the first cell (use .toLowerCase() to compare case-insensitively)
  var storedCourses = JSON.parse(localStorage.getItem(studentName)); // Get the stored courses
  for (var i = 0; i < storedCourses.length; i++) {
    if (storedCourses[i].name.toLowerCase() === courseName) { // Find the course in the stored courses array
      storedCourses.splice(i, 1); // Remove the course from the array
      localStorage.setItem(studentName, JSON.stringify(storedCourses)); // Update the stored courses in local storage
      row.parentNode.removeChild(row); // Remove the row from the table
      break;
    }
  }
}



function changeScore() {
  var courseName = document.getElementById("courseName").value.toLowerCase().replace(/\s+/g, '');
  var newScore = parseInt(document.getElementById("courseScore").value);

  // check if course name is not empty
  if (courseName === "") {
    alert("Please enter a course name.");
    return;
  }

  // check if new score is a valid number
  if (isNaN(newScore) || newScore < 0 || newScore > 100) {
    alert("Please enter a valid score between 0 and 100.");
    return;
  }

  // Get the stored courses array from local storage
  var storedCourses = JSON.parse(localStorage.getItem(studentName)) || [];

  // Check if storedCourses is undefined, and initialize it to an empty array if it is
  if (typeof storedCourses === "undefined" || storedCourses === null) {
    storedCourses = [];
  }

  console.log(storedCourses); // Debugging statement

  // Loop through the storedCourses array to find the course to be updated
  for (var i = 0; i < storedCourses.length; i++) {
    console.log(courseName); // Debugging statement
    if (storedCourses[i].name.toLowerCase().replace(/\s+/g, '') === courseName) {
      // Update the score and grade for the course
      storedCourses[i].score = newScore;
      storedCourses[i].grade = calculateGrade(newScore);

      // Update the corresponding table cell with the new score and grade
      var table = document.getElementById("gradesTable");
      for (var j = 0; j < table.rows.length; j++) {
        if (table.rows[j].cells[1].innerHTML.toLowerCase() === courseName) {
          table.rows[j].cells[2].innerHTML = newScore;
          table.rows[j].cells[3].innerHTML = calculateGrade(newScore);
          break;
        }
      }

      // Save the updated data back to local storage
      localStorage.setItem(studentName, JSON.stringify(storedCourses));

      // Alert the user that the score has been updated
      alert("Score for " + courseName.charAt(0).toUpperCase() + courseName.slice(1) + " has been updated to " + newScore + ".");
      location.reload();
      return;
    }
  }

  // If the course name is not found in the storedCourses array, alert the user
  alert("Course not found!");
}



// localStorage.clear();