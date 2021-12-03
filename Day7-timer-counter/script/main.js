//counter creation

(function () {
   //time variation declaration
   const second = 1000,
         minute = second * 60,
         hour = minute * 60,
         day = hour * 24;

         //calculate current day + 10 days
 
         Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        
        var date = new Date();
        
         //countdown logic from the 10th day   
      const countDown = new Date(date.addDays(10)).getTime() 
       x = setInterval(function() {    
 
         const now = new Date().getTime(),
               distance = countDown - now;
 
         document.getElementById("days").innerText = Math.floor(distance / (day)),
         document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
         document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
         document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
         //seconds
       }, 0)
   }());


