// select question-section
var accordion = document.getElementsByClassName("accordion");


for (var i = 0; i < accordion.length; i++){
   accordion[i].addEventListener("click", function(){
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      
      //logic handling the panel
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      } 
   })
}


