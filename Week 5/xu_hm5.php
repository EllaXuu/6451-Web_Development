<?php
   // error_reporting(E_ALL);
	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=defination objects-=-=-=-=-=-=-=-=-=-=-=-=--=-=//
   class Movie{//define the Moive object
   		var $title;
   		var $years;
   		var $rating;
           
           //create the constuct function
           function __construct($aTitle,$aYear,$aRating){
             $this -> title = $aTitle;
             $this -> years = $aYear;
             $this -> rating = $aRating;
           }
           
           //create a function to seperate the level by rating
           function whichLevel(){
           	if ($this -> rating >=9.0 ){
           		return 1;
           	} elseif ($this -> rating < 9.0 && $this -> rating >= 8.0){
           		return 2;
           	} elseif ($this -> rating < 8.0 && $this -> rating >= 7.0){
           		return 3;
           	} else {
           		return 4;
           	}
           }
	}

	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=Initialization data-=-=-=-=-=-=-=-=-=-=-=-=--=-=//
    //create new Moive objects
	$movie1 = new Movie ("The Godfather", 1972, 9.2);
	$movie2 = new Movie ("Howl's Moving Castle", 2004, 8.2);
	$movie3 = new Movie ("The Last Emperor", 1987, 7.8);
	$movie4 = new Movie ("Despicable Me", 2010, 7.7);
	$movie5 = new Movie ("Glass", 2019, 6.8);
	$movie6 = new Movie ("Pokémon Detective Pikachu", 2019, 7.1);
	$movie7 = new Movie ("Avengers: Endgame", 2019, 8.8);
	$movie8 = new Movie ("The Wandering Earth: Endgame", 2019, 6.3);
    
    //put all moives in the array
	$moviesTotal = array ($movie1, $movie2, $movie3, $movie4, $movie5, $movie6, $movie7, $movie8);
    //display information according to the user input
	$username = $_GET["username"];
	$moviesGet = $_GET["moives"];
	$moviesObj =array();
	$getNum=array();

       
	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=welcome messege-=-=-=-=-=-=-=-=-=-=-=-=--=-=//
	echo "<h2>Welcome $username!</h2><hr>";
	echo "<h3>You have chosen ".count($moviesGet)." movies: </h3><br>";
       //show all selected moives
    if(count($moviesGet!=0 )){
       	for ($i =0; $i <count ($moviesGet); $i ++){
			echo "$moviesGet[$i]<br>";
       	}
       }

	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=show selected moive information-=-=-=-=-=-=-=-=-=-=-=-=--=-=//
    echo "<br><h3>The details of the movies:</h3>";
	//for every item in $moivesGet
    //get the first num from its value
    //and put the numbers item to $getNum
	for ($i =0; $i <count ($moviesGet); $i ++){
		//test
		// echo "<br>$moivesGet[$i]";
        array_push($getNum, substr($moviesGet[$i],0,1));
	}

    //add objects to array moivesObj according to checked items
	foreach ($getNum as $key) {
           	array_push($moviesObj, $moviesTotal[$key]);
       	}

    //call the function to daw the information table 
	show_Table($moviesObj);

	//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-==-= functions -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=//

    //create a table according to the arry $info
	function show_Table(array $info,$trcolor='lightblue') {
		// first create the table
		echo "<table bgcolor='$trcolor' border='3'"
		. "bordedrcolor = 'black' cellpadding = '10'"
		. "cellspacing = '0'>";
	    echo "<tr bgcolor='#ffde7d'><th>Movie</th><th>Release Time</th><th>Rating</th></tr>";

		
		// now loop through the array
	 	// adjust the $trcolor according to different level of every moive item in the array
	 	foreach ($info as $key) {
	 		switch ($key->whichLevel()) {
	 			case 1:
	 				$trcolor = "#f67280";
	 				break;
	 			case 2:
	 				$trcolor = "#c06c84";
	 				break;
	 			case 3:
	 				$trcolor = "#6c5b7b";
	 				break;
	 			case 4:
	 				$trcolor = "#928a97";
	 				break;
	 			default:
	 				$trcolor = "#928a97";
	 				break;
	 		}
	 		// for each moive item, create the row, then  	create cells to show all object'sinformation 
	 		echo "<tr bgcolor='$trcolor'><td align='center'>" . ucwords($key->title). "</td><td align='center'>".$key->years." </td><td align='center'>".$key->rating."</td></tr>";
	 	}	
 
	 	// end the table
	 	echo '</table>';	
	 	}
 ?>