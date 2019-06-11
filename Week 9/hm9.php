<?php
$username = "root";
$password = "mysql";
$hostname = "localhost";

// connecting to mysql and to the database
$conn = new mysqli ($hostname, $username, $password, "myDB");

// heck to see if we connected
if ($conn ->connect_error) {
	die("Connection failed: " . $conn->connect_error );
}
echo "Connected to myDB!!!<br/>";


//-=-=-=-=-=-=-=-=-=-= insert the data to database -=-=-=-=-=-=-=-=-=-=//
// echo date("Y");
if(!empty($_POST)){
	$username= $_POST['username'];
	$family= $_POST['family'];
	$age= $_POST['age'];
	$password= $_POST['password'];
	$usergender= $_POST['usergender'];
	$dateofJoining= date("Y");//get the current year num
	
	$sql= "INSERT INTO Customers (name,family,age,gender,password,dateOfJoining)VALUES ('$username','$family','$age','$usergender','$password',$dateofJoining)";

	if (mysqli_query($conn,$sql)){
		echo "Insert successed! Welcome ".$username;
	}
	else{
		echo "Insert Failed";
	}
}

mysqli_close($conn);





?>