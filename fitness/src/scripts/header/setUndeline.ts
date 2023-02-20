import { TmpObj } from './../../types/type';

let tmpObj:TmpObj;

export let changeActiveNavLink = () =>{
    let listLiNav = document.querySelectorAll('.nav-list__item');
    const aboutDevelopers = document.querySelector('.about-developers__page') as HTMLElement;
    let urlObj = new URL(window.location.href);
    for (let i = 0; i < listLiNav.length; i++){
        if ((listLiNav[i] as HTMLElement).classList.contains('active-list')){
              listLiNav[i].classList.remove('active-list')
        }

    }

    if(aboutDevelopers) aboutDevelopers.style.textDecoration = 'none';

    if((urlObj.hash) === '#main-page' || (urlObj.hash) === '/' || (urlObj.hash) === '') listLiNav[0].classList.add('active-list');
    if((urlObj.hash) === '#training-page') listLiNav[1].classList.add('active-list');
    if((urlObj.hash) === '#activity-page') listLiNav[2].classList.add('active-list');
    if((urlObj.hash) === '#program-page') listLiNav[3].classList.add('active-list');
    if((urlObj.hash) === '#developers-page') {
        if(aboutDevelopers) aboutDevelopers.style.textDecoration = 'underline'}
}

export let changeActiveLang = () => {
   const lanRu  = document.querySelector('.lanRu');
   const lanEn  = document.querySelector('.lanEn');

   lanRu?.classList.remove('language-choose');
   lanEn?.classList.remove('language-choose');

    if(localStorage.getItem(('yt-widget'))){
      tmpObj = JSON.parse(String(localStorage.getItem('yt-widget')))
    }

   if (!localStorage.getItem('yt-widget') || tmpObj.lang === 'ru') {
      lanRu?.classList.add('language-choose')
   } else {
      lanEn?.classList.add('language-choose')
   }
}