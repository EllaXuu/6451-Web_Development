  // Easiest way to keep track of the courses is to store it in an array
 var courseList = [];
 
 // creating a table with columns id, course number and course name
 
 // first create a class and its constructor for a course by listing its properties
 class Course {
	constructor (id, grade,courseNum, courseTitle) {   
		// 1) complete the constructor
		// Be careful with the id; this actually becomes the course length (since courses are in an array!) 
		this.id=courseList.length;
		this.courseNum=courseNum;
		this.courseTitle=courseTitle;
	   this.grades = [];


	} // end constructor
	 
 }// end class Course
 
 // next write a function to create a new course

 // because its an array, as we add courses to the array, the length ofthe array becomes the course id.
 
 function createNewCourse(courseNum, courseTitle) {
    var course = new Course(courseNum, courseTitle);
    courseList.push(course);
	// we will also need a function that adds this row of the array to our table
    course.courseRow = addCourseRow(course.id, courseNum, courseTitle);
}

// here is the function that adds a row to the table
// it first creates the row, then puts in the information, that is arguments passed
// and then returns the row
function addCourseRow (courseID,courseNum, courseTitle ) {
	
	// first grab the table:
	var courseTable = document.getElementById('myTable');
	//2) next add a row and append it to the table
	var courseRow= document.createElement('tr');
	courseTable.appendChild(courseRow);
	
	// each row has 3 cells or 3 columns; add each of those and append them to the row
	//3) a cell for the id
	var id=document.createElement('td');
	courseRow.appendChild(id);
	
	// 4)a cell for the course number
	var courseNumCell=document.createElement('td');	
	courseRow.appendChild(courseNumCell);

	
	// 5) and a cell for the course title
	var courseTitleCell=document.createElement('td');
	courseRow.appendChild(courseTitleCell);

	
	
	// ok, now that the row and its cells have been created, add the information
	id.appendChild(document.createTextNode(courseID));
	courseNumCell.appendChild(document.createTextNode(courseNum));
	courseTitleCell.appendChild(document.createTextNode(courseTitle));
	return courseRow;
	
}

// Test your code by uncommentin/ g the following lines and running the html.
// If everything works with no errors, comment those lines again, and go on to the next file.
createNewCourse("DGM 6108","Programming Foundations for Digital Media");
createNewCourse("DGM 6308","Intermediate Programming for Digital Media");


