//Dom elements
const time = document.getElementById('time'),
      greeting =document.getElementById('greeting'),
      name =document.getElementById('name'),
      focus =document.getElementById('focus');


      //show time
      function showTime(){
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();
            
        //set PM or AM
        const amPm = hour >= 12?'PM':'AM';
        
        // time format

        hour = hour % 12 || 12;

        // output the time
        time.innerHTML = `${hour} <span>:</span>${addZero(min)}<span>:</span> ${addZero(sec)}`;
        setTimeout(showTime,1000);
      }
      // Add zero to the min & sec

      function addZero(n){
        return (parseInt(n,10)<10?'0' : '') + n;
      }
      // Set background image

      function SetBgImageGreet(){
        let today = new Date(),
        hour = today.getHours();

        if(hour<12){
          //Morning
          document.body.style.backgroundImage = "url('../images/morning.jpg')";
          greeting.textContent = 'Good Morning';
        }else if(hour <18){
           // Afternoon 
           document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
           greeting.textContent = 'Good Afternoon';

        }else{
          //Evening
          document.body.style.backgroundImage = "url('./images/night.jpg')";
          greeting.textContent = 'Good Evening';
          document.body.style.color = 'white';
        }
      }

      // Call functions

         showTime();
         SetBgImageGreet();