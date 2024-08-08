// window.addEventListener("scroll", function () {
//     if (window.pageYOffset > 0) {
//         document.querySelector(".dusky-header").classList.add("sticky");
//     } else {
//         document.querySelector(".dusky-header").classList.remove("sticky");
//     }
// });

// function Toggler() {
//     const headerToggle = document.querySelector('.mobile-togger'); 
//     const headerMainMenu = document.querySelector('.header-menu-wrap'); 
//     headerToggle.addEventListener('click', function () {
//         this.classList.toggle('bar-active'); 
//         headerMainMenu.classList.toggle('show-menu')
//     });
// }

// // Header gutter for adjusting header height
// function HeaderGutter() {
//     const header = document.querySelector('.dusky-header')
//     const headerGutter = document.querySelector('.header_gutter')
//     headerGutter.style.height = header.clientHeight + 'px'
// }

// function resultInClick(){
//     Toggler()
//     HeaderGutter()
// }

// window.addEventListener('load', resultInClick);

// (function ($) {
//     $(document).ready(function () {
       
//             $(".collage-fill .input-collage").click(function () {
               
//                 $(".collage-list").slideToggle();  
//             });

//             $(".subject-fill .input-subject").click(function () {
               
//                 $(".subject-list").slideToggle();
           
//             });

//             $(".passing-year-fill .passing-year").click(function () {
               
//                 $(".passing-year-list").slideToggle();
                 
//             }); 
//     });
// })(jQuery);

window.addEventListener('DOMContentLoaded' , function(){
    
    let time = setInterval(function(){
        
        let curentTime = new Date() .getTime();

        const tergetTime = new Date("Aug 7 , 2024 00:00:00") .getTime();
    
        let differencSec = (tergetTime - curentTime) / 1000;

           
    if(differencSec < 0){

        clearInterval(time);
        document.querySelector(".timer-wrepper").innerHTML = "<h4>EXPIRED</h4>";
        
    }

        let days = Math.floor(differencSec / (60 * 60 * 24));
    
        let hours = Math.floor((differencSec % (60 * 60 * 24)) / (60 * 60));
    
        let minutes = Math.floor((differencSec % (60 * 60))/ 60);
    
        let seconds = Math.floor(differencSec % (60));

        if(days<10){
            days = "0" + days;
        }

        if(hours<10){
            hours = "0" + hours;  
        }

        if(minutes<10){    
            minutes = "0" + minutes;
        }

        if(seconds<10){
            seconds = "0" + seconds;
        }


        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minute').innerHTML = minutes;
        document.getElementById('second').innerHTML = seconds;

    })

    ;

   let clock = setInterval (function(){
        let curentMinute = new Date().getMinutes();
        let currentHours = new Date().getHours();
        let currentSecond = new Date().getSeconds();

        if(currentHours<10){
            currentHours = "0" + hours;  
        }

        if(currentHours>= 12){

        }

        if(curentMinute<10){    
            curentMinute = "0" + curentMinute;
        }

        if(currentSecond<10){
            currentSecond = "0" + currentSecond;
        }

        let derection = document.getElementById('clockDerection');

        if(currentHours >= 12) {

            if(currentHours > 12) currentHours -= 12;
            derection.innerHTML = 'PM';
        }
        else if(currentHours == 0){
            currentHours = 12;
            derection.innerHTML = 'AM';
            
        }
        
    
            document.getElementById('clockHours').innerHTML = currentHours;
            document.getElementById('clockMinute').innerHTML = curentMinute;
            document.getElementById('clockSecond').innerHTML = currentSecond;
    
           
   });

   let analogClock = setInterval (function(){
    let analogHours = new Date(). getHours();
    let analogMinutes = new Date().getMinutes();
    let analogSecond = new Date().getSeconds();

    let stricHours = (analogHours / 24) * 360 ;
    let stricMinute = (analogMinutes / 60) * 360 ;
    let stricSecond = (analogSecond / 60) * 360 ;

    document.getElementById('analogSecond').style.rotate=`${stricSecond}deg`;
    document.getElementById('analogMinute').style.rotate=`${stricMinute}deg`;
    document.getElementById('analogHours').style.rotate=`${stricHours}deg`;
    
   });
})
