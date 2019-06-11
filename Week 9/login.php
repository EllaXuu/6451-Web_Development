<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>

  	<meta charset="utf-8">
  	<!-- connect to the bootstrap 4 css -->
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="hm9.css">
    <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Asap|Cabin&display=swap" rel="stylesheet">
</head>
<body>
	<div class= "content">
		<!-- create a login form -->
		<form class='form-horizontal' role='form' action="hm9.php" method="post">
			<h2 class="form-title">Login</h2>
   			<hr>
            
            <div>
	        	<label for="username" class="control-label">Your Name</label>
	        	<input type="text" class="form-control textinput" name="username" 
	        			   placeholder="please enter your name">
	        </div>

			<div>
	        	<label for="password" class="control-label">Password</label>
	        	<input type="password" class="form-control textinput" name="password" 
	        			   placeholder="please create your password">
	        </div>

		   	<hr>
    		<!-- <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> -->
			<button type="submit" name="loginbtn" class="btn btn-lg btn-primary btn-block registerbtn">Login</button>

			<!-- <div class="container signin"> -->
    		<p>Want to register? <a href="index.html">Sign Up</a>.</p>
 		</div>
				
		</form>
	</div>





</body>
</html>