let listElements = document.querySelectorAll('.hero__link--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('sub_menu');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});


let ico__hamburger = document.getElementById('ico__hamburger');
let menu = document.getElementById('menu');

ico__hamburger.addEventListener('click', function () {
    menu.classList.toggle('hamburger__active');
});


window.addEventListener("scroll", function(){
    let hero__menu = document.querySelector(".hero__menu");
    hero__menu.classList.toggle("menu__scroll",window.scrollY>0);
})