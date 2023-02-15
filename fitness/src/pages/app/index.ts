import MainPage from "../main";
import Page from "../../core/templates/pages";
import TrainingPage from "../training";
import ActivityPage from "../activity";
import ProgramPage from "../program";
import DevelopersPage from "../developers";
import Header from "../../core/components/header";
import Footer from "../../core/components/footer";
import ErrorPage, { ErrorTypes } from "../error";

import { checkPurposes, checkUserInSystem, checkUserPurposes, closeSignInUp, logOut, openSignIn, openSignUp, singIn, singUp, toOpenSingIn, } from "../../scripts/modal/modalSignUpIn";

import { clickForYou, clickSearch } from "../../scripts/training/clickButton";
import openCloseList from "../../scripts/training/openCloseList";
import { shiftLeft, shiftRight, createSliderNew, createSliderHome, createSliderRecommendation  } from "../../scripts/training/shift";
import { renderContainerVideo } from "../../scripts/training/renderContainerVideo";
import { openModalWindowNewSlider, openModalWindowHomeSlider, openModalWindowRecommendationSlider } from "../../scripts/training/modalWindow";
import { openModalWindowPlay } from "../../scripts/training/playVideoTrainingSearch";

interface IEvent extends Event {
    closest: string
}


export const enum PageIds {
    MainPage = 'main-page',
    TrainingPage = 'training-page',
    ActivityPage = 'activity-page',
    ProgramPage = 'program-page',
    DevelopersPage = 'developers-page',
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private initialPage: MainPage;
    private header: Header;
    private footer: Footer;

    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header', 'heder');
        this.footer = new Footer('footer', 'footer');
    }

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PageIds.TrainingPage) {
            page = new TrainingPage(idPage);
        } else if (idPage === PageIds.ActivityPage) {
            page = new ActivityPage(idPage);
        } else if (idPage === PageIds.ProgramPage) {
            page = new ProgramPage(idPage);
        } else if (idPage === PageIds.DevelopersPage) {
            page = new DevelopersPage(idPage);
        } else {
            page = new ErrorPage(idPage, ErrorTypes.Error_404);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            if (document.querySelector('header')) {
                document.querySelector('header')?.after(pageHTML);
            }
        }
    }

    private enableRouterChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
            this.clickBtnTraining();
        });
    }


    clickBtnTraining() {
        const buttonForYou = document.querySelector(".button_for_you") as HTMLElement;
        const buttonSearch = document.querySelector(".button_search") as HTMLElement;
        buttonForYou?.addEventListener("click", clickForYou);
        buttonSearch?.addEventListener("click", clickSearch);

        const trainingCategoryAll = document.querySelectorAll(".training_category_composite") as NodeListOf<HTMLElement>;
        trainingCategoryAll.forEach((el, i) => el.addEventListener("click", () => openCloseList(i)));

        const trainingArrowLeftAll = document.querySelectorAll(".training_arrow_left") as NodeListOf<HTMLElement>;
        const trainingArrowRightAll = document.querySelectorAll(".training_arrow_right") as NodeListOf<HTMLElement>;
        trainingArrowRightAll.forEach((el, i) => el.addEventListener("click", () => shiftLeft(i)));
        trainingArrowLeftAll.forEach((el, i) => el.addEventListener("click", () => shiftRight(i)));
        createSliderNew();
        createSliderHome();
        createSliderRecommendation();

        const containerSliderNew = document.querySelector(".slider_new");
        const fon = document.querySelector(".training_fon") as HTMLElement;
        containerSliderNew?.addEventListener('click', openModalWindowNewSlider);
        const containerSliderHome = document.querySelector(".slider_home");
        containerSliderHome?.addEventListener('click', openModalWindowHomeSlider);
        const containerSliderRecommendation = document.querySelector(".slider_recommendation");
        containerSliderRecommendation?.addEventListener('click', openModalWindowRecommendationSlider);
        const buttonClose = document.querySelector(".close_modal_window");
        buttonClose?.addEventListener("click", () => {
            const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
            modalWindow.classList.add("training_none");
            fon.classList.add("training_none");
        })
        fon?.addEventListener("click", () => {
            const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
            modalWindow.classList.add("training_none");
            fon.classList.add("training_none");
        })

    }


    btnSignIn() {
        let btnSignIn = document.querySelector('.btn-signIn');

        btnSignIn?.addEventListener('click', () =>{
            openSignIn();
        })
    }

    btnSignUp() {
        let btnSignUp = document.querySelector('.btn-signUp');

        btnSignUp?.addEventListener('click', () =>{
            openSignUp();
        })
    }

    btnLogOut() {
        const btnLogOut = document.querySelector('.btn-logOut') as HTMLButtonElement;

        btnLogOut?.addEventListener('click', () => {
            logOut()
        })

    }

    closeForms() {
        let closeSingUp = document.querySelector('.closeSingUp');
        let closeSingIn = document.querySelector('.closeSingIn');

        closeSingUp?.addEventListener('click', () => {
            closeSignInUp()
        })

        closeSingIn?.addEventListener('click', () => {
            closeSignInUp()
        })
    }

    linkToOpenSingIn() {
        const linkToSignIn = document.querySelector('.linkToSignIn') as HTMLElement;

        linkToSignIn?.addEventListener('click', () => {
            toOpenSingIn();
        })

    }

    callSingUp() {
        const registerBtn = document.querySelector('.registerBtn') as HTMLButtonElement;
        const nickNameSignUp = document.querySelector('.nickNameSignUp') as HTMLInputElement;
        const pswSignUp = document.querySelector('.pswSignUp') as HTMLInputElement;

        registerBtn?.addEventListener('click', () => {
            let nickName = nickNameSignUp.value.toLowerCase();
            let password = pswSignUp.value;
            singUp(nickName, password);
        })
    }

    callSingIn() {
        const enterBtn = document.querySelector('.enterBtn') as HTMLButtonElement;
        const nickNameSignIn = document.querySelector('.nickNameSignIn') as HTMLInputElement;
        const pswSignIn = document.querySelector('.pswSignIn') as HTMLInputElement;

        enterBtn?.addEventListener('click', () => {
            let nickName = nickNameSignIn.value.toLowerCase();
            let password = pswSignIn.value;
            singIn(nickName, password);
        })
    }

    modalUserPurposes() {
        const userPurposes = document.querySelector('.user-purposes');
        userPurposes?.addEventListener('click', (e) => {
            let tmpArr: string[] = []
           /*   console.log (e.target); */
              let element = e.target as HTMLInputElement;
              if (element.tagName === "INPUT") {
               tmpArr = checkUserPurposes();
              }

              if (localStorage.getItem('users')) {
                let arr: string | null = localStorage.getItem('users');
                let newArr = JSON.parse(String(arr));
                for (let i = 0 ; i < newArr.length; i++) {

                  if (newArr[i].inSystem === true) {
                    newArr[i].purpose = tmpArr;
                  }
                }
                localStorage.setItem('users',JSON.stringify(newArr) );
              }
            })
    }

    userInSystem() {
        checkUserInSystem()
    }

    userPurposes() {
        checkPurposes();
    }

    callRenderContainerVideos() {

        window.addEventListener('hashchange', () => {
          let trainingSearchContainer = document.querySelector('.training_search_container');

          trainingSearchContainer?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
              if (target.closest('.training_category_list')) {
                const trainingSearchContainer = document.querySelector('.training_search_container') as HTMLElement;
                if(trainingSearchContainer) trainingSearchContainer.style.display = 'none'
                renderContainerVideo(target.innerText);
              }
              if(target.closest('.short_training')){
                const trainingSearchContainer = document.querySelector('.training_search_container') as HTMLElement;
                if(trainingSearchContainer) trainingSearchContainer.style.display = 'none'
                renderContainerVideo('short_training');
              }

              if(target.closest('.all_training')){
                const trainingSearchContainer = document.querySelector('.training_search_container') as HTMLElement;
                if(trainingSearchContainer) trainingSearchContainer.style.display = 'none'
                renderContainerVideo('all_training');
              }
            })
        });
    }

  playVideoSearch(){
    window.addEventListener('hashchange', () => {
        const trainingContainerVideos = document.querySelector('.training_container_videos') as HTMLElement;
        const fon = document.querySelector(".training_fon") as HTMLElement;
        const buttonClose = document.querySelector(".close_modal_window");
        trainingContainerVideos?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.closest('.workout-card')) {

                openModalWindowPlay(String(target.closest('.workout-card')?.getAttribute('data-index')))
            }
        })

        buttonClose?.addEventListener("click", () => {
            const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
            modalWindow.classList.add("training_none");
            fon.classList.add("training_none");
        })
        fon?.addEventListener("click", () => {
            const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
            modalWindow.classList.add("training_none");
            fon.classList.add("training_none");
        })

    })

  }

    run() {
        const hash = window.location.hash.slice(1);
        App.container.append(this.header.render());
        hash ? App.renderNewPage(hash) : App.renderNewPage('main-page');
       /*  App.renderNewPage('main-page'); */
        App.container.append(this.footer.render());
        this.enableRouterChange();
        this.closeForms();
        this.btnSignIn();
        this.btnSignUp();
        this.btnLogOut();
        this.linkToOpenSingIn();
        this.callSingUp();
        this.callSingIn();
        this.modalUserPurposes();
        this.userInSystem();
        this.userPurposes();
        this.callRenderContainerVideos();
        this.playVideoSearch()
    }
}

export default App;