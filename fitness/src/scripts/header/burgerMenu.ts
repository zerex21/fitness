export const closeBurgerMenu = () => {
    const menuBtn = document.querySelector('.menu-btn') as HTMLElement;
    const listNavigation = document.querySelector('.list-navigation') as HTMLElement;
    const headerNav = document.querySelector('.header-nav') as HTMLElement;
    const body = document.body as HTMLElement;

    if(menuBtn.classList.contains('openBRM')){

        listNavigation.addEventListener('click', (e) => {
            let element = e.target as HTMLInputElement;
            if(element.closest('.nav-list__item')){
                menuBtn.classList.remove('openBRM')
                headerNav.classList.remove('navBRM');
                headerNav.style.display = 'none';
                body.classList.remove('shadowBody');
                (body.classList.contains('shadowBody')) ? body.style.overflow = 'hidden' :body.style.overflow = 'auto';
            }
        })

    }
}