 // creating a table with columns id, course number and course name
 // This particular version will dynamically add a columns
 // Suppose you want to add a column to record the score you got on each of the courses
 // So lets create an array that will hold the column data
 var columnData = [];
 // Remember that in the file dynamicTable.js you created a Course class and constructor and courseList array 
 // var courseList = [];
 // 1) now create an array that will hold the grades and add it to the course constructor in dynamicTable.js
	//this.grades = [];

// focusing on adding a column:

// now create the class and constructor for this new columnData, call it Grade for our purposes
  class Grade {
      constructor (columnName, theGrade) {
          this.columnName = columnName;
          this.theGrade = theGrade;
          this.id = columnData.length;
          this.gradeColumn = addGradeColumn(columnName, theGrade, this.id);
      } // end constrctor
  } // end class Grade


// next create the new Grade datastructure
function createNewColumn(columnName) {
    // create a new grade object to add to the column data array...
    var grade = new Grade(columnName);
    columnData.push(grade);
    /*  ... then update the courseList so every row i has a grade for 
        that course. (Note that courses just have a number for each  
        column position; the column names are handled in the separate
        columnData array)
    */
    for (var i = 0; i < courseList.length; i = i + 1) {
        courseList[i].grades[grade.id] = "No grade yet";
    }
}

// We have the structure for it; lets add the grade column to the table
function addGradeColumn (columnName, theGrade, id) {
	// create a column for the gradebook data, zero it out as placeholders and return it.
	var gradeHeaderRow = document.getElementById('gradeHeaders');
	// add a cell for the id & homework name
	var gradeColumn = document.createElement('td');
	gradeColumn.appendChild(document.createTextNode("ID#" + id + ":" + columnName));
	gradeHeaderRow.appendChild(gradeColumn);
	
	// create the grades cell and zero them out
	
	for (var i = 0; i < courseList.length; i++){
		var gradeCell = courseList[i].courseRow.appendChild (document.createElement('td'));
		gradeCell.appendChild(document.createTextNode("No Grade Yet"));
	}
	
	return gradeColumn;
}
// 3) Now grab the column button and add an event listener to it to prompt for column info
 var addColumnBT=document.getElementById('addColumn');
addColumnBT.addEventListener('click',promptForColumnInfo);
 
// lets get all the data that goes in this column
function promptForColumnInfo () {
	var columnName = "";
	
	do {
        columnName = prompt("Please enter a name for the column:");
    } while (columnName.length < 1);
	
	createNewColumn(columnName);	
}

// 4) grab the addGrade button and add an event listener to it to prompt for grade info
 var addGradeBT=document.getElementById('addGrade');
addGradeBT.addEventListener('click',promptForGradeInfo);

// 5) Write the function promptForGradeInfo asking for courseID and grade
function promptForGradeInfo () {
	var id="";
	var gradeInfo = "";
	do {
        id = prompt("Please enter the course ID you want to update:");
    } while (id.length < 1);
	
	do {
        gradeInfo = prompt("Please enter the Grade:");
    } while (gradeInfo.length < 1);
	

	
// 6) the last line of the function will call the function updateGrade
	updateGrade(gradeInfo);	
}

// 7) your last challenge - see if you can write this functionn to update each course with the grade you got there
function updateGrade(courseID, grade) {
	// console.log('updage');
	
}

