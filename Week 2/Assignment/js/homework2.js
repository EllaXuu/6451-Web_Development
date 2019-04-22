"user strict"
//create a table recording moives
//related to the "My Favorite Movies" part

//-=-=-=-=-=-=-=-=-=-=Initialize variables and objects-=-=-=-=-=-=-=-=-=-=-==//

var movieListData=[];//store moives
var ratelistData=[];//store ratings

//create a class Moive
class Moive {
    constructor(name,year){
        this.name=name;
        this.id=movieListData.length;
        this.rates=[];
        this.movieRow;
    }
}// end of class Moive

//create a class Rating 
class Rating {
    constructor(title,totalPointValue){
        this.title=title;
        this.totalPointValue=totalPointValue;
        this.id=ratelistData.length;
        this.rateColumn;
    }

}// end class Rating

//-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-= button event part-=-=-=-=-=-=-=-=-=-=-=-=-=-==//

//connect the buttons to functions for upgrating the information
var addmoiveButton = document.getElementById('addMoive');
addmoiveButton.addEventListener('click', promptForMoiveInfo, false);
    
var addRatingButton = document.getElementById('addRate');
addRatingButton.addEventListener('click',promptForRatetInfo, false);

var updateGradeButton = document.getElementById('updateRates');
updateGradeButton.addEventListener('click',promptForUpdateRateInfo, false);

//-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-=function part-=-=-=-=-=-=-=-=-=-=-=-=-=-==//

//create a function to create a new rate 
function createNewRate(ratingTitle, totalPointValue) {
    //new a Rating object
    var ratingItem = new Rating(ratingTitle, totalPointValue, ratelistData);
    
    //set the rateColumn property of the ratingItem object
    ratingItem.rateColumn= addRateColumn(ratingTitle, totalPointValue, ratingItem.id);

    //set the default value
    var i;
    ratelistData.push(ratingItem);
    for (var i = 0; i < movieListData.length; i = i + 1) {
        movieListData[i].rates[ratingItem.id] = 0;
    }

    //when create a new rating and create a new column
    //call the function updateRates() to update
    updateRates();
}

//create a function to create a new moive
function createNewMoive(name) {
    // create a new moive object 
    var moiveItem = new Moive(name, movieListData);

    //set the movieRow property of the moiveItem object
    moiveItem.movieRow= addMoiveRow(moiveItem.id, name);

    //set default value
    var i;
    movieListData.push(moiveItem);
    // update new moiveItem so it has a 0 for every rating i from the rating array
    for (i = 0; i < movieListData.length; i = i + 1) {
        moiveItem.rates[i] = 0;
    }

    //when create a new moive and create a new row
    //call the function updateRates() to update
    updateRates();
}

// create this function to update the specific rate before
// calling updateRates() to update the averages
function updateMoiveRate(moiveID, rateID, points) {

    // this updates the rates in the movieListData array, which is separate
    // from the visual component
    movieListData[moiveID].rates[rateID] = points;

    //find the target cell
    var targetColumn = movieListData[moiveID].movieRow.firstChild.nextSibling.nextSibling;
    for (let leftColumn = rateID+1; leftColumn>0; leftColumn--){
        targetColumn= targetColumn.nextSibling;
    }
    targetColumn.innerHTML=points;// set the points content
 
   //call the function updateRates() to update the total rate
    updateRates();

}

//create a function to add a column for a rating
function addRateColumn(ratingTitle, totalPointValue, id) {
    //update the header
    var headerRow = document.getElementById('headers');
    var headColumn = document.createElement('td');
    headColumn.appendChild(document.createTextNode("ID#"+id + " : " + ratingTitle + " (" + totalPointValue + " points)"));
    
    headColumn.style.backgroundColor="#9E9E9E";
    headColumn.style.color="#000000";

    headerRow.appendChild(headColumn);
    
    //set the rest cells and set the default value
    for (var i = 0; i<movieListData.length; i++) {
        var gradeCell = movieListData[i].movieRow.appendChild(document.createElement('td'));
        gradeCell.appendChild(document.createTextNode("0"));
    }
    
    return headColumn;
}

//create a function to add a row for a new moive
function addMoiveRow(moiveID, name) {
    //connect to the table and add a row
    var table = document.getElementById('movieTable');
    var moiveRow = table.appendChild(document.createElement('tr'));
    
    //update the first three columns for this row
    var id = moiveRow.appendChild(document.createElement('td'));
    var moiveName = moiveRow.appendChild(document.createElement('td'));
    var ratePercent = moiveRow.appendChild(document.createElement('td'));
  
    id.appendChild(document.createTextNode(moiveID));
    moiveName.appendChild(document.createTextNode(name));     
    ratePercent.appendChild(document.createTextNode("0"));

    //set the default value for rest cells
    for (var j = 0; j < ratelistData.length; j = j + 1) {
        var gradeData = moiveRow.appendChild(document.createElement('td'));
        gradeData.appendChild(document.createTextNode("0"));
    }
    
    return moiveRow;
}

// create a function to calculate each moive's rate 
function updateRates() {
    
    
    var i, j;
    
    // figure out how many points everything is worth by adding up ratings
    var totalPoints = 0;
    
    for (i = 0; i < ratelistData.length; i = i + 1) {
        totalPoints = totalPoints + ratelistData[i].totalPointValue;
    }

    // For each moive i in list, add up retes for all ratings j
    // the outer i loop iterates through the moives
    // the inner j loop iterates through that moives's rates
    
    for (i = 0; i  < movieListData.length; i = i + 1) {
        var moiveRunningTotal = 0;
        for (j = 0; j < movieListData[i].rates.length; j = j + 1) {
            var rateScore = movieListData[i].rates[j];
            moiveRunningTotal = moiveRunningTotal + rateScore;
        } 
    
        var ratePercentage = (moiveRunningTotal/(totalPoints > 0 ? totalPoints : 1)) * 100;

       // Find the overall column and update the data
        let targetColumn = movieListData[i].movieRow.firstChild.nextSibling.nextSibling;
        targetColumn.innerHTML=ratePercentage.toFixed(1)+"%";
    }
}

//create a function to get the moive information by a prompt box
function promptForMoiveInfo() {
    var name = "";
    do {
        name = prompt("Please enter the Moive's name:");
    } while (name.length < 1);
    createNewMoive(name);
}

//create a function to get the rating information by prompt boxes
//the title and the point value of it
function promptForRatetInfo() {
    var rateName = "";
    var rateValue = 0;
    do {
        rateName = prompt("Please enter a title for the rating:");
    } while (rateName.length < 1);
    do {
        rateValue = Number(prompt("Please enter a point value for the rating:")); // IMPORTANT TO COERCE TO A NUMBER HERE!
    } while (rateValue < 1);
    createNewRate(rateName, rateValue);
}

//create a funtion for update the input information from user
//First: to receive moiveID, rateID, and ratePoints from user
//Second: to update the infromation if the user confirmed
function promptForUpdateRateInfo(){
    let moiveID= 0;
    let rateID= 0;
    let ratePoints=0;
    
    do{
        moiveID= prompt(`The range of Moive ID numbers is: 0-${movieListData.length-1}`, "Please enter a reasonable number here.");
    }while (moiveID=="" || isNaN(moiveID) || Number(moiveID)<0 || Number(moiveID)>(movieListData.length-1));
    do{
        rateID = prompt(`The range of rating ID numbers is: 0-${ratelistData.length-1}`, "Please enter a reasonable number here.");
    }while (rateID=="" || isNaN(rateID) || Number(rateID)<0 || Number(rateID)>(ratelistData.length-1));
    
    //get the max point of the current rateID 
    var maxPoint;
    for (var i=0;i <ratelistData.length;i++){
        if (ratelistData[i].id==rateID){
            maxPoint=ratelistData[i].totalPointValue;
        }
    }
    // console.log(maxPoint);
    
    do{
        ratePoints = prompt(`Please enter an non-negative number as the points of this moive in this rating.`,`0`);
    }while (ratePoints=="" || isNaN(ratePoints) || Number(ratePoints)<0 ||Number(ratePoints)>maxPoint);
    
    if(moiveID!=null && rateID!=null && ratePoints!= null){
    updateMoiveRate(Number(moiveID),Number(rateID),Number(ratePoints));
    }
}   

//-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-= default data part-=-=-=-=-=-=-=-=-=-=-=-=-=-==//

//create new rates and moives
createNewRate("IMDB", 10);
createNewRate("Metascore", 100);
createNewRate("Rotten Tomatoes", 100);

createNewMoive("The Godfather");
createNewMoive("The Silence of the Lambs");
createNewMoive("Howl's Moving Castle");
createNewMoive("Monsters, Inc.");
createNewMoive("When Harry Met Sally");
createNewMoive("The Last Emperor");
createNewMoive("Rain Man");

//update their information
updateMoiveRate(0, 0, 9.2);
updateMoiveRate(0, 1, 100);
updateMoiveRate(0, 2, 98);

updateMoiveRate(1, 0, 8.6);
updateMoiveRate(1, 1, 85);
updateMoiveRate(1, 2, 96);

updateMoiveRate(2, 0, 8.2);
updateMoiveRate(2, 1, 80);
updateMoiveRate(2, 2, 87);

updateMoiveRate(3, 0, 8.1);
updateMoiveRate(3, 1, 78);
updateMoiveRate(3, 2, 96);

updateMoiveRate(4, 0, 7.6);
updateMoiveRate(4, 1, 76);
updateMoiveRate(4, 2, 90);

updateMoiveRate(5, 0, 7.8);
updateMoiveRate(5, 1, 76);
updateMoiveRate(5, 2, 91);

updateMoiveRate(6, 0, 8.1);
updateMoiveRate(6, 1, 65);
updateMoiveRate(6, 2, 89);


//-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-= simple game part-=-=-=-=-=-=-=-=-=-=-=-=-=-==//
"use strict"

//  use two-dimensional array to reoresent the TIc Tac Toer boarder
let boardArray=[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]];
//use a two-dimensional array to store all prossibility for win
let WinArray=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];
let playerMoveArray=[];
let computerMoveArray=[];
let countForWin=0;

//connect to dom elements
const playAgainBT =document.getElementById('playAgain');
const playTurnMessege= document.getElementById('playTurn'); 

//add event to play again
playAgainBT.addEventListener('click',function(){
    location.reload();
});

setUpGame();

//create a function to set up a new game
function setUpGame(){
    var table=document.getElementById('gameTable');
    //draw the game table
    for (let i=0; i <=2; i ++){

        var row=document.createElement('tr');
        table.appendChild(row);

        for (let j=0; j<=2; j++){
            boardArray[i][j]=0;
            var element=document.createElement('td');
            element.id=i+'_'+j;
            element.setAttribute('height',100);
            element.setAttribute('width',100);
            row.appendChild(element);
            //add event to each cell
            element.addEventListener('click',attempMove);
            
        }
    }
    //reset all data
    playerMoveArray=[];
    computerMoveArray=[];
    countForWin=0;

}

//create a function to attempt move
function attempMove(eventTarget){
    var square = eventTarget.target.id;
    let splitID = square.split("_");

    if (boardArray[splitID[0]][splitID[1]]==0){
        makePlayerMove(splitID);
        // checkForGameOver(playerMoveArray,"Player");
        if (!checkForGameOver(playerMoveArray,"Player")){
            makeComputerMove();
            checkForGameOver(computerMoveArray,"Computer");
        }
    }
}

//create a function to make a X move
function makePlayerMove(splitID) {
    //add this move the playerMoveArray
    let moveIndex= 3*Number(splitID[0])+Number(splitID[1]);
    playerMoveArray.push(moveIndex);
    //change the display part
    playTurnMessege.innerHTML= " It's X's turn! ";
    
    //set the boardArray element referenced by "square" 
    boardArray[Number(splitID[0])][Number(splitID[1])]=1;//1

    // Remove the "click" event listener
    let element = document.getElementById(splitID[0]+'_'+splitID[1]);
    element.removeEventListener('click',attempMove);
    //add event if click, then pop a reminder
    element.addEventListener('click',function(){
        confirm("Sorry, this square is occupied!");
    })
    //Change the square's image to "x.jpg"
    element.innerHTML='X';//3
}

//create a funciton to make computer to move randomly
function makeComputerMove() {
    //change the display
    playTurnMessege.textNote= " It's X's turn! ";
    //get two random numbers to move which is not be occupied
    var madeMyMove = false;
    while (madeMyMove == false) {
        let randomNum1 = Math.floor(Math.random()*3);//1
        let randomNum2 = Math.floor(Math.random()*3);//1
        // console.log("randomNum1: "+randomNum1+" randomNum2: "+randomNum2);
        if (boardArray[randomNum1][randomNum2]==0){//2
            boardArray[randomNum1][randomNum2]=2;//3.a
            computerMoveArray.push(3*randomNum1+randomNum2);
            
            // Remove the "click" event listener
            let element = document.getElementById(randomNum1+'_'+randomNum2);
            element.removeEventListener('click',attempMove);
            //add event if click, then pop a reminder
            element.addEventListener('click',function(){
                confirm("Sorry, this square is occupied!");
            })

            //Change the square's image to "x.jpg"
            element.innerHTML='o';//3.c
            madeMyMove=true;//3.e
        }
    }
}

//create a function to check if win or not
function checkForGameOver(moveArray,name) {
    //for each item of WinArray
    //compare the move array to it
    for (let i=0; i < WinArray.length; i ++){
        countForWin=0;
        for (let j=0; j <WinArray[i].length; j ++){
            if (moveArray.indexOf(WinArray[i][j])!== -1){
                countForWin++;
            }
            //if there are 3 move item which match to one win item
            if (countForWin == 3){
                //change the dispaly
                playTurnMessege.innerHTML=name+" Win!!";
                //test
                console.log(name+' Win!');

                for (let i=0; i <=2; i ++){
                    for (let j=0; j<=2; j++){
                        let element = document.getElementById(i+'_'+j);
                        element.removeEventListener('click',attempMove);
                        element.addEventListener('click',function(){
                           confirm("Sorry, this turn is over!");
                        });
                    }
                }
                return true;
            }
        }
    }

}

