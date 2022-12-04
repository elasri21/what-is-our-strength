// show and hide navigation menu

const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");

openMenu.addEventListener("click", function() {
    this.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
});
closeMenu.addEventListener("click", function() {
    this.style.display = "none";
    openMenu.style.display = "block";
    nav.style.display = "none";
});

// panet
const btns = Array.from(document.querySelectorAll(".box .question"));
const text = Array.from(document.querySelectorAll(".panel .box p"));

btns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        // for(let i = 0; i < btns.length; i++) {
        //     btns[i].classList.remove("active");
        // }
        //btn.classList.remove("active");
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("hide");
    })
})
