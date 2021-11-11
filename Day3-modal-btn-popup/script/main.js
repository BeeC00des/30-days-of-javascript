// select the button that's open the modal
var btn = document.querySelector('.btn-click');

console.log(btn + 'btn gotten');

//select close button on the modal

var closeBtn = document.querySelector('.close-btn');
console.log( closeBtn +'closebtn gotten');

// create a function


function toggleModal() {
   // select the pop up modal
   var modal = document.querySelector('.modalPopup');
   //add toggle classList
   modal.classList.toggle("display-modal");
}

function windowOnClick(event) {
   if (event.target === modal) {
       toggleModal();
   }
}

btn.addEventListener("click", toggleModal);

closeBtn.addEventListener("click", toggleModal);

window.addEventListener("click", windowOnClick);