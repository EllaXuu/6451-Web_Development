
<!DOCTYPE html>
<html>
<head>
	<title>week 6 assignment</title>
  <style>
    .error {color: #FF0000;}
  </style>
  <link rel="stylesheet" type="text/css" href="xu_hm6.css">
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"><!--icon resource-->

</head>
<body>
<?php
	
	// define error information
	$nameErr = $emailErr = $passwordErr="";
	//  define  variables to receive the post value from the from
	$name = $email = $password="";
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// check the user name input box
	  if (empty($_POST["username"])) {
		$nameErr = "Name is required";
	  } else {
		$name = test_input($_POST["username"]);
		// check if name only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
		  $nameErr = "Only letters and white space allowed"; 
		}
	  }
	  
	  //check the email input box
	  if (empty($_POST["emailAddress"])) {
		$emailErr = "Email is required";
	  } else {
		$email = test_input($_POST["emailAddress"]);
		// check if e-mail address is well-formed
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		  $emailErr = "Invalid email format"; 
		}
	  }

	  //check the password input box
	  if (empty($_POST["password"])) {
		$passwordErr = "Password is required";
	  } else {
		$password = test_input($_POST["password"]);
		// check if e-mail address is well-formed
		if (mb_strlen($password) < 8) {
		  $passwordErr = "Password must contain 8+ characters"; 
		}
	  }

      //get the radio choice value
	  $gameMode= $_POST["gameMode"];
	  //call the function to change bgcolor
	  changeBG($gameMode);

	}

    function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}

    //set bgcolor according to the radio choice of game mode
	function changeBG($data){
		$bgcolor="pink";

		switch ($data) {
	 			case 'easy':
	 			    // echo "easy";
	 				$bgcolor = "#fffcca";
	 				break;
	 			case 'hard':
	 			    // echo "hard";
	 				$bgcolor = "#f9a1bc";
	 				break;
	 			case 'hell':
	 			    // echo "hell";
	 				$bgcolor = "#8d6262";
	 				break;
	 			default:
	 				$bgcolor = "pink";
	 				break;
	 		}
	    echo "<body style='background-color:$bgcolor'>";
	    echo "</body>";

	}
	?>

<!--the main page-->
<div id="gameName">
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">

		<!--input box for user name-->
        <i class="fas fa-user-secret"></i> User Name:
        <span class="error"> <font size="3">* <?php echo $nameErr;?></font></span><br>
        <input id ="username" type="text" name="username" value="<?php echo $name;?>" placeholder="Create your username">
        <br>

		<!--input box for email address-->
        <i class="fas fa-envelope"></i> Email Address:
        <span class="error"> <font size="3">* <?php echo $emailErr;?></font></span><br> 
        <input id ="emailAddress" type="email" name="emailAddress" value="<?php echo $email;?>" placeholder="Input your email address">
        <br>

		<!--input box for password-->
        <i class="fas fa-key"></i></i> Password:
        <span class="error"> <font size="3">* <?php echo $passwordErr;?></font></span><br> 
        <input id ="password" type="password" name="password" value="<?php echo $password;?>" placeholder="Create your password">
        <br>

		<!--radios for game mode-->

        <input id="easymode" type="radio" name="gameMode" value="easy" checked>&nbsp;Easy Mode&nbsp;&nbsp;<!--the game mode-->
	    <input id="hardmode" type="radio" name="gameMode" value="hard" checked>&nbsp;Hard Mode&nbsp;&nbsp;<!--the game mode-->
	    <input id="hellmode" type="radio" name="gameMode" value="hell" checked>&nbsp;Hell Mode&nbsp;&nbsp;<!--the game mode-->

	      <br><br>
        <button ype="submit" id="start"><i class="far fa-play-circle"></i> Start</button> 

  	</form>
</div>


</body>