
//dropdown menu
const barIcon = document.getElementById("barIcon");
const timesIcon = document.getElementById("timesIcon");
const menu = document.getElementById("menu");


barIcon.addEventListener("click", function(){
    menu.style.opacity = '1';
    menu.style.visibility = 'visible';
    menu.style.transform = 'scaleY(1)';
    timesIcon.style.opacity = '1';
    timesIcon.style.visibility = 'visible';
    barIcon.style.opacity = '0';
    barIcon.style.visibility = 'hidden';
});

timesIcon.addEventListener("click", function(){
    menu.style.opacity = '0';
    menu.style.visibility = 'hidden';
    menu.style.transform = 'scaleY(0)';
    timesIcon.style.opacity = '0';
    timesIcon.style.visibility = 'hidden';
    barIcon.style.opacity = '1';
    barIcon.style.visibility = 'visible';
})