const navLinks= document.getElementById("navLinks");
const timesIcon = document.getElementById("times");
const barsIcon = document.getElementById("bars");

barsIcon.addEventListener('click', showMenu);
timesIcon.addEventListener('click', closeMenu);


 function showMenu(){
  navLinks.style.right = '0';
}
function closeMenu(){
navLinks.style.right = '-200px';  
}