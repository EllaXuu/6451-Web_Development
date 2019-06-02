//-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= json parse-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= //
// output the content from json by using parse function 
var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status ==200){//ready to output
		// use the parse function to get data
		var dataResponse = JSON.parse (xhttp.responseText);
		var people=dataResponse.people;
		// console.log(people[0].location);//test
		var output="";

        //output all content depends on different gender 
		for (var i =0; i <people.length; i ++){
			if (people[i].gender=="female"){
				output+= '<li><b>'+people[i].name+"</b>: She is <b>"+people[i].age+"</b> years old. She is living in <b>"+people[i].location.street+"</b> of <b>"+ people[i].location.city+"</b>. She joined this website in <b>"+people[i].DateOfJoining+'</b>.</li>';
			}
			else {
				output+= '<li><b>'+people[i].name+"</b>: He is <b>"+people[i].age+"</b> years old. He is living in <b>"+people[i].location.street+"</b> of <b>"+ people[i].location.city+"</b>. He joined this website in <b>"+people[i].DateOfJoining+'</b>.</li>';
			}
		}

        //output the data to dom
		document.getElementById ('peopleOutput').innerHTML = output;
	}

}
xhttp.open("GET","json/hm7.json");
xhttp.send();

//-=-=-=-=-=-==-=-=-=-=-=-=-=-=-= stringify -=-=-=-=-=-==-=-=-=-=-=-=-=-=-= //
//output the content from js by using stringify function 

//create a object newUser
var newUser = {
	name: "x",
	age: 12,
	gender: "male",
	location: {
		street:"1 Main St",
		city:"city"
		},
	DateOfJoining:2019
}; // end object newUser

//connect the button 
//and add event on it
var btn= document.getElementById('stringify');
btn.addEventListener("click",function(){
	//use the stringify function to get the data
	document.getElementById('newPeopleOutput').innerHTML="<pre><b>"+JSON.stringify(newUser, null,'\t')+"</b></pre>";
})