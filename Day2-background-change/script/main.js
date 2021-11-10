//get div section
var bgColor=  document.getElementById("main-container")
var selected=  document.getElementById("randColors")
//create a background color change function
function bgColorChanger(){
   // declare array of colors
   var colors = [
      "red",
      "blue",
      "green",
      "yellow", 
      "#f5f5f5",
      "#800080",
      "#FA8072",
      "#778899"
   ]
      console.log(colors);

   // loop through the array to identify each color
   for(var i = 0; i < colors.length; i++){
      console.log("the color is  " + colors[i]);   
   }

    // get colors at random
   const random = Math.floor(Math.random() * colors.length);
      console.log(random, "This is the random color selected " + colors[random]);
      // attach random color to dom
      selected.innerHTML =colors[random];

   const randomColor =colors[random];
      console.log(randomColor);

    // apply to dom
   bgColor.style.backgroundColor= randomColor; 
}


// interact with the dom 
document.getElementById('btn-click').onclick = function changeColor(){
   //function invocation
   bgColorChanger();
 }