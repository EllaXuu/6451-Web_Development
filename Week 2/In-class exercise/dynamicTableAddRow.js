// in the file dynamicTable.js, you created a constructor for a course  
// you've also declared an array of courses (courseList[])
// lastly you wrote a function that add's a course row to your table.
// In this file, you'll enable the AddRow Button
// ask the user for a course number and a title and
// dynamically create a new row and add a new class.

// now start adding the courses
// Once you get this js file working, comment those lines and go to the next js file.
// createNewCourse("DGM 6108","Programming Foundations for Digital Media");
// createNewCourse("DGM 6308","Intermediate Programming for Digital Media");
// createNewCourse("DGM 6451","Web Development");

// Adding A ROW to your dynamic table
// 1) Grab the addRow button and add an event listener that calls the promptForRowInfo function
// 	  and give the user the chance to add a row via an event listener
var addRowBT=document.getElementById('addRow');
addRowBT.addEventListener('click',promptForRowInfo);

// Get all the information needed from the user, using a do ... while loop
function promptForRowInfo() {
	// declare the variables that will hold the row information
	var courseNum = "";
    var courseTitle = "";
	
	// now get the information from the user
	 do {
        courseNum = prompt("Please enter the course #:");
    } while (courseNum.length < 1);
	
    do {
        courseTitle = prompt("Please enter the course title:");
    } while (courseTitle.length < 1);
	
	// We should now have all the information we need to add the new row
	// 2) Call the function to create a new course  and fill it with the appropriate information.
	createNewCourse(courseNum,courseTitle);
	
}

// once you get this file working, don't forget to comment out the 1st 3 lines at the top that add courses to the table!
