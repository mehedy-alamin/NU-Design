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

window.addEventListener("DOMContentLoaded", function () {
    let time = setInterval(function () {
        let currentTime = new Date().getTime();

        const targetTime = new Date("Aug 11 , 2024 00:00:00").getTime();

        let differentSec = (targetTime - currentTime) / 1000;

        let days = Math.floor(differentSec / (60 * 60 * 24));

        let hours = Math.floor((differentSec % (60 * 60 * 24)) / (60 * 60));

        let minutes = Math.floor((differentSec % (60 * 60)) / 60);

        let seconds = Math.floor(differentSec % 60);

        if (days < 10) {
            days = "0" + days;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
    }, 1000);

    let clock = setInterval(function () {
        let currentMinute = new Date().getMinutes();
        let currentHours = new Date().getHours();
        let currentSecond = new Date().getSeconds();

        if (currentHours < 10) {
            currentHours = "0" + hours;
        }

        if (currentMinute < 10) {
            currentMinute = "0" + currentMinute;
        }

        if (currentSecond < 10) {
            currentSecond = "0" + currentSecond;
        }

        let direction = document.getElementById("clockDirection");

        if (currentHours >= 12) {
            if (currentHours > 12) currentHours -= 12;
            direction.innerHTML = "PM";
        } else if (currentHours == 0) {
            currentHours = 12;
            direction.innerHTML = "AM";
        }

        document.getElementById("clockHours").innerHTML = currentHours;
        document.getElementById("clockMinute").innerHTML = currentMinute;
        document.getElementById("clockSecond").innerHTML = currentSecond;
    });

    let analogClock = setInterval(function () {
        let analogHours = new Date().getHours();
        let analogMinutes = new Date().getMinutes();
        let analogSecond = new Date().getSeconds();

        let stricHours = (analogHours / 24) * 360;
        let stricMinute = (analogMinutes / 60) * 360;
        let stricSecond = (analogSecond / 60) * 360;

        document.getElementById(
            "analogSecond"
        ).style.rotate = `${stricSecond}deg`;
        document.getElementById(
            "analogMinute"
        ).style.rotate = `${stricMinute}deg`;
        document.getElementById(
            "analogHours"
        ).style.rotate = `${stricHours}deg`;
    });
});

(function ($) {
    const wrapperClass = document.querySelector(".section-dropdown-filtering");
    const inputClass = document.querySelector(
        ".section-dropdown-filtering .filter-input-wrapper"
    );
    const inputField = document.querySelector(
        ".section-dropdown-filtering .filter-input-wrapper .filter-input"
    );
    const optionsClass = document.querySelector(
        ".section-dropdown-filtering .filter-options"
    );

    const singleOptions = document.querySelectorAll(
        ".section-dropdown-filtering .filter-options li"
    );

    $(document).ready(function () {
        $(optionsClass).slideUp(0);

        $(inputClass).on("click", function (e) {
            e.stopPropagation();
            $(optionsClass).slideToggle();
        });

        $(document).on("click", function (e) {
            e.stopPropagation;
            $(optionsClass).slideUp();
            $(wrapperClass).removeClass("valid");
        });

        $(inputField).on("input", function () {
            const filter = this.value.toLowerCase();

            let matchCount = 0;

            singleOptions.forEach((item) => {
                const text = item.textContent.toLowerCase();

                if (text.startsWith(filter)) {
                    item.style.display = "block";
                    matchCount++;
                } else {
                    item.style.display = "none";
                }
            });

            if (filter.length >= 1 && matchCount === 0) {
                $(wrapperClass).addClass("invalid").removeClass("valid");
            } else {
                $(wrapperClass).addClass("valid").removeClass("invalid");
            }
            if (filter.length === 0) {
                $(wrapperClass).removeClass("valid").removeClass("invalid");
            }
        });

        singleOptions.forEach((item) => {
            $(item).on("click", (e) => {
                $(inputField).val(e.target.textContent.trim());
                $(optionsClass).slideUp();
            });
        });
    });
})(jQuery);
