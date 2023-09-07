// getting all the links 
let navLinks = document.querySelectorAll(".nav_menu a");
// get the blue underline element
const underline = document.querySelector('.under');

// looping through each navigation link and adding a click event listener
for(let link of navLinks){
    link.addEventListener("click", (e)=>{
        e.preventDefault();

        const linkRect = link.getBoundingClientRect();
        const navRect = document.querySelector('.nav_menu').getBoundingClientRect();
    
        underline.style.width = `${linkRect.width}px`;
        underline.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
        underline.style.trandition = "0.5s ease";
        underline.classList.add("mg_right");
    });
}