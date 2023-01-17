window.onload = function(){    
    load();
}


function load(){
    var menuBtn = document.getElementById("menu-btn");
    var navLinks = document.getElementById("nav-links");


    
    menuBtn.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
    })


}