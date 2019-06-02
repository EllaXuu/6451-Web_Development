var ourRequest = new XMLHttpRequest();
ourRequest.open(‘GET’, “jsonAjax.json”);
 ourRequest.onload = function() {
// for proof of concept, see if we can dump the json in the console
console.log(ourRequest.responseText; } // end anonymous function