/* let burgerBtn = document.querySelector('.menu-btn');
let headerNav = document.querySelector('.header-nav');
let designed = document.querySelector('.designed')
let logoBurger = document.querySelector('.logo_burger')
let burgerSpan2 = document.querySelector('.menu-btn__span2')
let burgerSpan1 = document.querySelector('.menu-btn__span1')
let burgerSpan3 = document.querySelector('.menu-btn__span3')
let navigationLinks = document.querySelector('.navigationLinks')
let body = document.body


let closeAdditions = () =>{
    headerNav.style.display = 'none';
    body.classList.remove('shadow')
    logoBurger.style.display = "none" ;
    burgerBtn.classList.remove('close');
    designed.style.display = 'none'
    body.classList.remove('scroll')
}

let burgerToggle = () =>{
    burgerBtn.addEventListener('click',(e)=>{
        headerNav.style.display = headerNav.style.display === "block" ?"none" : "block";
        burgerBtn.classList.toggle('close')
        body.classList.toggle('scroll')
        designed.style.display = designed.style.display === "block" ?"none" : "block";
        logoBurger.style.display = logoBurger.style.display === "block" ?"none" : "block";
        body.classList.toggle('shadow');
    })


}


let closeBurger = () =>{
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(headerNav);
        if ( ! withinBoundaries && e.target !=burgerSpan1 && e.target !=burgerSpan2 && e.target !=burgerSpan3 ) {
            closeAdditions()
        }

        if(e.target.tagName === 'A'){
            closeAdditions()
        }

    })
}


export  {burgerToggle, closeBurger}; */