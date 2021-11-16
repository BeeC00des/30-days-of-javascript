//tab creation

function openData(evt, dataItem){

   var i, tabcontent, tablinks;

   tabcontent = document.getElementsByClassName("tabContent");
   for (i=0; i<tabcontent.length; i++){
      tabcontent[i].style.display = "none"
   }

   tablink  = document.getElementsByClassName("tabLink");
   for (i=0; i<tablink.length; i++){
      tablink[i].className = tablink[i].className.replace("active", "");
   }

   document.getElementById(dataItem).style.display = "block";
   evt.currentTarget.className += "active";
   
}


