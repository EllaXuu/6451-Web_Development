<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<?php
	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
	 // basic echo
	echo ("<h1>Hello world</h1>");
	echo "<hr>";
	echo "<p>This is a paragraph.</p>";
	// could wirte any html element to html page
    // show information in order
	
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    // variable $
    $characterName = "Snow";//string
    $characterAge = 40;//number
	
    echo "There once was a name named John. <br>";
    echo "He was 35 years old <br>";
	
		echo "There once was a name named 1: $characterName.<br>";
	
    $characterName ="Mike";
		//could change the variable in thie middle part
    echo "There once was a name named 2: $characterName.<br>";
    echo "He was $characterAge years old <br>";
	
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
		//data types
		//1.string
		$phrase = "To be or not to be.";
		//2. numbers, no quotation marks
		$age = 30;// int, a whole number
		$gpa = 3.7; //floating point number, totally differerent with int in php
		//3.boolean
		$isMale = true; //true or false
		//4.null= no value , just use the null key number
		echo 4.75;
		echo $gpa;
	
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
		//working with strings, string functions
		$phrase= "Giraffe Academy";
		echo strtolower($phrase);// lower keys
		echo strtoupper($phrase);// all upper keys
		echo strlen($phrase);// how many characters inside the string
		echo $phrase[0];//get the first character using index number
		echo "Mike"[0];//get the first character using index number
		//you could change the content by using index numbers
		$phrase[0]="B";
	  echo $phrase;// should start with B.
		echo str_replace("Academy","Panda",$phrase);//replace Giraffe by By Panda in $phrase
		//should be Biraffe Panda
		echo str_replace("ffe","Panda",$phrase);//replace Giraffe by By Panda in $phrase
		//should be BiraPanda Academy
		echo "<br>";
		//grap character from $phrase start with 8
		echo substr($phrase, 8);//grap the "Academy" by index number
		echo substr($phrase, 8,3);//show "Aca"
	
		//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
		//working with Numbers
    echo 40;//input a number
		echo -40;//input a negative number
		echo 5+9;//should output 14
		echo 10%3;//should output the reminder 1
		echo 4+5*10;//should output 54, different from (4+5)*10
		//math function
		echo abs(-100);//get back the absolute number, 100
		echo pow (2,4);//2 raise to the 4th power, 16
		echo sqrt(144);//get squart root number,12
		echo max(1, 10);//print out the bigger number
		echo min(1, 10);//print out the smaller number
		echo round (3.7);//round the number, 4
		echo ceil (3.3);// always rouder the number up, 4
		echo floor (3.9);//always rounder the number down, 3

	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
  //array
	$friends = array ("Kevin","Karen","Oscar","Jim");
	$friends[10]="Angela";//could change items
	echo $friends[10];
	echo count($friends);//5
	
	
	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
  //functions
	function sayHi($name){
		echo "Hello $name <br>";
	}
	sayHi("Tom");
	sayHi("Dave");
	
	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
  //return statement
	function cube($sum){
		echo "string1";//will execute
		return $sum * $sum;
		echo "string2";//will not execute
	}
	
	echo cube(4);
	
	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
	//if statement
  $isMale =true;
	$isTall = false ;
	if($isMale && $isTall){
		echo "You are a tall male <br>";
	} elseif ($isMale && !$isTall) {
		echo "You are a short male <br>";
	} else {
		echo "You are not male";
	}
	
  //if statement, con't
	function getMax($num1, $num2, $num3){
		if ($num1>=$num2 && $num1>= $num3){
			return $num1;
		} elseif($num2>=$num1 && $num2>= $num3)
		{return $num2;}
	    else {
		return $num3;
	}}
	
	echo getMax(3000, 4000, 6000);
	
	?>


<!-- from and get data by get php -->
	<form action="test.php" method="get">
			Name: <input type="text" name="username">
      <br>
			Age: <input type="number" name="age">
			<br>
			<input type="submit">
	</form>

	<br>
	Your name is: <?php echo $_GET["username"] ?>
	<br>
	Your age is: <?php echo $_GET["age"] ?>

	<!-- building a calender -->
		<form action="test.php" method="get">
			  <input type="number" name="num1">
	      <br>
				<input type="number" name="num2">
				<br>
				<input type="submit">
		</form>
		<?php echo $_GET["num1"]+$_GET["num2"] ?>
		<!-- should print out the add output -->

	<!-- building a mad libs game -->
	<form action="test.php" method="get">
			Color: <input type="text" name="color"><br>
			Plural Noun: <input type="text" name="pluralNoun"><br>
			Celebrity: <input type="text" name="celebrity"><br>
			<input type="submit">
	</form><br><br>
	<?php
	  $color = $_GET["color"];
		$pluralNoun = $_GET['pluralNoun'];
		$celebrity = $_GET['celebrity'];
	  echo "Roses are $color <br>";
	  echo "$pluralNoun are blue <br>";
	  echo "I love $celebrity <br>";
	 ?>

	 <!-- using checkboxed + array-->
   <br>
	 <form action="test.php" method="get">
		  Apples: <input type="checkbox" name="fruits[]" value="apples"><br>
		  Oranges: <input type="checkbox" name="fruits[]" value="oranges"><br>
		  Pears: <input type="checkbox" name="fruits[]" value="pears"><br>
			<input type="submit">
	 </form><br><br>
	 <?php
		 $fruits = $_GET["fruits"];
		 echo "$fruits[2]";//all selected option will be stored in fruits[]
		?>

		<!-- building a better calculater -->
		<br>
		<form action="test.php" method="post">
			 First Num: <input type="number" step="0.1" name="num1"><br>
			 <!--  type number default is a whole number, should add step, you could 0.1, 0.001, 0.0001-->
			 OP: <input type="text" name="op"><br>
			 Second Num:: <input type="number" name="num2"><br>
			 <input type="submit">
		</form><br><br>
		<?php
		$num1 =$_POST["num1"];
		$num2 = $_POST["num2"];
		$op = $_POST ["op"];

		if ($op == "+"){
			echo $num1 +$num2;
		} elseif($op == "-"){
			echo  $num1 -$num2;
		} elseif($op == "/"){
			echo  $num1 / $num2;
		}elseif($op == "*"){
			echo  $num1 * $num2;
		} else {
			echo "Invalid Operator";
		}
		?>

		<!-- switch statement -->
		<br>
		<form action="test.php" method="post">
			 What was your grade?
			 <input type="text" name="grade"><br>
			 <input type="submit">
		</form><br><br>
		<?php
		$grade =$_POST["grade"];
		$num2 = $_POST["num2"];
		$op = $_POST ["op"];

		switch ($grade){
			case "A":
				echo "You did amazing!";
				break;
			case "B":
				echo "You did pretty good!";
				break;
			default:
				echo "Invaild grade!";
		}
		?>
		<!-- switch statement -->
    <?php
		$luckyNumbers = array (4,8,14,16,23,42);
		for ($i =0; i<= count($luckyNumbers); $i++){
			echo "$luckyNumbers[$i] <br>";
		}
		?>

		<!-- include html -->
		<?php
		// include "header.html"
		?>
		<p>Hello world</p>
		<?php
		// include "footer.html"
		?>

		<!-- include php -->
		<?php
		$title = "My first post";
		$author = "Mike";
		$wordCount = 400;

		// include "header.php";//could use all variable and all statement inside the pho file
		?>

		<!-- classes and object -->

    <?php
		class Book{//define what an object is
				var $title;
				var $author;
				var $pages;
		}
		$book1 = new Book;//a object
		$book1 -> title = "Harry Potter";
		$book1 -> pages = 400;
		$book1 -> author = "JK Rowling";

		echo $book1->author;

		?>

</body>
</html>
