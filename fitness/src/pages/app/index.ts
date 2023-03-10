import { renderContainerProgrammsVideos } from './../../scripts/training/renderContainerProgrammsVideos';
import { changeActiveLang } from './../../scripts/header/setUndeline';
import { changeActiveNavLink } from '../../scripts/header/setUndeline';
import { yaTranslateInit } from './../../scripts/language/language';

import { closeBurgerMenu } from './../../scripts/header/burgerMenu';
import MainPage from "../main";
import Page from "../../core/templates/pages";
import TrainingPage from "../training";
import ActivityPage from "../activity";
import ProgramPage from "../program";
import DevelopersPage from "../developers";
import Header from "../../core/components/header";
import Footer from "../../core/components/footer";
import ErrorPage, { ErrorTypes } from "../error";

import { checkPurposes, checkUserInSystem, checkUserPurposes, closeFormCallFriends, closeSignInUp, formFrinedUp, logOut, openFormCallFriends, openSignIn, openSignUp, singIn, singUp, toOpenSingIn, } from "../../scripts/modal/modalSignUpIn";
import { clickForYou, clickSearch } from "../../scripts/training/clickButton";
import openCloseList from "../../scripts/training/openCloseList";

import { shiftLeft, shiftRight, createSliderNew, createSliderHome, createSliderRecommendation } from "../../scripts/training/shift";

import { renderContainerVideo } from "../../scripts/training/renderContainerVideo";
import { openModalWindowNewSlider, openModalWindowHomeSlider, openModalWindowRecommendationSlider } from "../../scripts/training/modalWindow";
import { openModalWindowPlay, openModalWindowPlayProgramms } from "../../scripts/training/playVideoTrainingSearch";
import { playVideoSearch, renderListSearch } from "../../scripts/training/playSearchVideo";
import { activityNewSlider, activityHomeSlider, activityRecommendationSlider, activityTrainingSearch } from '../../scripts/training/activity';
import { createItemsActivity, shiftLeftActivity, shiftRightActivity } from '../../scripts/activity/activity';

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

            this.callRenderContainerVideos();
            this.closeRenderContainerVideo();
            this.playListVideoSearch();
            this.getValueInputSearch();
            this.playVideoSearch();
            this.getNavLink()
            if (hash === "training-page") {
                this.clickBtnTraining();
            }
            this.callRenderContainerProgrammsVideos();
            this.playVideoProgramms();
            this.btnSendInvite();
            this.closeForms();
            this.callFormFriends();
            if (hash === "activity-page") {
                createItemsActivity();
                this.paginationActivity();
            }
            if (hash === "program-page") {
                this.programmsActivity();
            }
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
        containerSliderNew?.addEventListener('click', activityNewSlider);
        const containerSliderHome = document.querySelector(".slider_home");
        containerSliderHome?.addEventListener('click', openModalWindowHomeSlider);
        containerSliderHome?.addEventListener('click', activityHomeSlider);
        const containerSliderRecommendation = document.querySelector(".slider_recommendation");
        containerSliderRecommendation?.addEventListener('click', openModalWindowRecommendationSlider);
        containerSliderRecommendation?.addEventListener('click', activityRecommendationSlider);

        const trainingSearch = document.querySelector(".training_container_videos");
        trainingSearch?.addEventListener("click", activityTrainingSearch);
        const buttonClose = document.querySelector(".close_modal_window");
        buttonClose?.addEventListener("click", () => {
            // const player = document.querySelector("iframe") as HTMLElement;
            // player.remove();
            const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
            modalWindow.classList.add("training_none");
            fon.classList.add("training_none");
        })
        fon?.addEventListener("click", () => {
            // const player = document.querySelector("iframe") as HTMLElement;
            // player.remove();
            const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
            modalWindow.classList.add("training_none");
            fon.classList.add("training_none");
        });

        window.addEventListener("load", () => {
            createSliderNew();
            createSliderHome();
            createSliderRecommendation();

        })
        const checkboxAll = document.querySelectorAll(".checkbox-user");
        checkboxAll.forEach((el) => el.addEventListener("input", () => {
            setTimeout(createSliderRecommendation, 100)
        }))
        const btnLogOut = document.querySelector(".btn-logOut");
        btnLogOut?.addEventListener("click", () => {
            setTimeout(createSliderRecommendation, 100)
        })
        const btnEnter = document.querySelector(".enterBtn");
        btnEnter?.addEventListener("click", () => {
            setTimeout(createSliderRecommendation, 100)
        })
    }

    btnSendInvite() {
        let btnSendInvite = document.querySelector('.main-page__btn-join');

        btnSendInvite?.addEventListener('click', () => {
            openFormCallFriends();
        })
    }

    btnSignIn() {
        let btnSignIn = document.querySelector('.btn-signIn');

        btnSignIn?.addEventListener('click', () => {
            openSignIn();
        })
    }

    btnSignUp() {
        let btnSignUp = document.querySelector('.btn-signUp');

        btnSignUp?.addEventListener('click', () => {
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
        let closeCallFriends = document.querySelector('.closeCallFriend');


        closeSingUp?.addEventListener('click', () => {
            closeSignInUp()
        })

        closeSingIn?.addEventListener('click', () => {
            closeSignInUp()
        })

        closeCallFriends?.addEventListener('click', () => {
            closeFormCallFriends()
        })
    }

    linkToOpenSingIn() {
        const linkToSignIn = document.querySelector('.linkToSignIn') as HTMLElement;

        linkToSignIn?.addEventListener('click', () => {
            toOpenSingIn();
        })

    }

    callFormFriends() {
        const sendBtn = document.querySelector('.sendBtn') as HTMLButtonElement;
        const inputEmail = document.querySelector('.inputEmail') as HTMLInputElement;


        sendBtn?.addEventListener('click', () => {
            let nickName = inputEmail.value.toLowerCase();
            formFrinedUp(nickName);
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
            let element = e.target as HTMLInputElement;
            if (element.tagName === "INPUT") {
                tmpArr = checkUserPurposes();
            }

            if (localStorage.getItem('users')) {
                let arr: string | null = localStorage.getItem('users');
                let newArr = JSON.parse(String(arr));
                for (let i = 0; i < newArr.length; i++) {

                    if (newArr[i].inSystem === true) {
                        newArr[i].purpose = tmpArr;
                    }
                }
                localStorage.setItem('users', JSON.stringify(newArr));
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
        let urlObj = new URL(window.location.href);
        if ((urlObj.hash) === '#training-page') {
            let trainingSearchContainer = document.querySelector('.training_search_container');

            trainingSearchContainer?.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                if (target.closest('.training_category_list')) {
                    const trainingSearchContainer = document.querySelector('.training_search_container') as HTMLElement;
                    if (trainingSearchContainer) trainingSearchContainer.style.display = 'none'
                    renderContainerVideo(target.innerText);
                }
                if (target.closest('.short_training')) {
                    const trainingSearchContainer = document.querySelector('.training_search_container') as HTMLElement;
                    if (trainingSearchContainer) trainingSearchContainer.style.display = 'none'
                    renderContainerVideo('short_training');
                }


                if (target.closest('.all_training')) {
                    const trainingSearchContainer = document.querySelector('.training_search_container') as HTMLElement;
                    if (trainingSearchContainer) trainingSearchContainer.style.display = 'none'
                    renderContainerVideo('all_training');
                }
            })
        }
    }

    playVideoSearch() {
        let urlObj = new URL(window.location.href);
        if ((urlObj.hash) === '#training-page') {
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
                const player = document.querySelector("iframe") as HTMLElement;
                player.remove();
                const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
                modalWindow.classList.add("training_none");
                fon.classList.add("training_none");
            })
            fon?.addEventListener("click", () => {
                const player = document.querySelector("iframe") as HTMLElement;
                player.remove();
                const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
                modalWindow.classList.add("training_none");
                fon.classList.add("training_none");
            })

        }

    }

    getValueInputSearch() {
        let urlObj = new URL(window.location.href);
        if ((urlObj.hash) === '#training-page') {
            const trainingInputSearch = document.querySelector('.training_input_search') as HTMLInputElement;
            trainingInputSearch?.addEventListener('keyup', () => {
                renderListSearch(trainingInputSearch.value)
            })
        }
    }

    playListVideoSearch() {
        let urlObj = new URL(window.location.href);
        if ((urlObj.hash) === '#training-page') {
            const optionsSearch = document.querySelector('.options_search') as HTMLElement;
            const trainingInputSearch = document.querySelector('.training_input_search') as HTMLInputElement;
            optionsSearch?.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                playVideoSearch(target.innerText);
                trainingInputSearch.value = '';
                optionsSearch.style.display = 'none';
            })
        }
    }

    changeTheme() {
        const switchTheme = document.querySelector('.switch-theme') as HTMLAnchorElement;
    
        switchTheme?.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const theme = target.closest('div') as HTMLElement;
            let url = new URL(window.location.href);
    
            if (theme.classList.contains('switch-theme__white')) {
                document.body.classList.remove('dark', 'light');
                document.body.classList.add('light');
                localStorage.setItem('theme', 'light');
                url.searchParams.set('theme', 'light');
               history.pushState(null, '', url);
                console.log(url);
            } else if (theme.classList.contains('switch-theme__black')) {
                document.body.classList.remove('dark', 'light');
                document.body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                url.searchParams.set('theme', 'dark');
                history.pushState(null, '', url);
                console.log(url);
            }
    
        })
    }

    checkResizeWindow() {
        window.addEventListener(`resize`, (e) => {
            const headerNav = document.querySelector('.header-nav') as HTMLElement;
            const menuBtn = document.querySelector('.menu-btn') as HTMLElement;
            const body = document.body as HTMLElement;
            if (!headerNav.classList.contains('navBRM'))
                (window.innerWidth >= 1001) ? headerNav.style.display = 'block' : headerNav.style.display = 'none';

            if (window.innerWidth >= 1001) {
                menuBtn.classList.remove('openBRM')
                headerNav.classList.remove('navBRM');
                /* headerNav.style.display = 'none'; */
                body.classList.remove('shadowBody');
            }

            (body.classList.contains('shadowBody')) ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';

        })
    }

    yaTranslateForPages = () => {
        /************************* */
        let url = new URL(window.location.href);

        let hideBlocks = () => {
            const trainingSearchContainer = document.querySelector('.training_search_container') as HTMLElement;
            const trainingContent = document.querySelector('.training_content') as HTMLElement;;
            if (trainingSearchContainer) trainingSearchContainer.style.display = 'none'
            if (trainingContent) trainingContent.style.display = 'none'
        }


       let checkButtons = () => {
            if (url.searchParams.get('training') === 'forYou') {
                const buttonForYou = document.querySelector(".button_for_you") as HTMLElement;
                const buttonSearch = document.querySelector(".button_search") as HTMLElement;
                const trainingForYou = document.querySelector(".training_content") as HTMLElement;
                const trainingSearch = document.querySelector(".training_search_container") as HTMLElement;
                if( buttonSearch) buttonSearch?.removeAttribute("disabled");
                if( trainingForYou) trainingForYou?.classList.remove("training_none");
                if( trainingSearch) trainingSearch?.classList.add("training_none");
                if( buttonForYou) buttonForYou?.setAttribute("disabled", "disabled");
                if( trainingForYou) trainingForYou.style.display = 'block'
                if( trainingSearch) trainingSearch.style.display = 'none'


            } else if (url.searchParams.get('training') === 'search') {
                const buttonForYou = document.querySelector(".button_for_you") as HTMLElement;
                const buttonSearch = document.querySelector(".button_search") as HTMLElement;
                const trainingForYou = document.querySelector(".training_content") as HTMLElement;
                const trainingSearch = document.querySelector(".training_search_container") as HTMLElement;
                if( buttonForYou) buttonForYou.removeAttribute("disabled");
                if( trainingForYou) trainingForYou.classList.add("training_none");
                if( trainingSearch) trainingSearch.classList.remove("training_none");
                if( buttonSearch) buttonSearch.setAttribute("disabled", "disabled");
                if( trainingForYou) trainingForYou.style.display = 'none'
                if( trainingSearch)trainingSearch.style.display = 'block'
            }
        }


        let lang: string;
        document.addEventListener('DOMContentLoaded', function () {


            if (url.searchParams.get('training') === 'press') {


                renderContainerVideo('Press and housing');
                hideBlocks()
                checkButtons()

            } else if (url.searchParams.get('training') === 'arms') {

                renderContainerVideo('Arms and shoulders');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'buttocks') {


                renderContainerVideo('Buttocks and shoulders');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'endurance') {


                renderContainerVideo('Endurance');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'mobility') {


                renderContainerVideo('Mobility');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'strength') {


                renderContainerVideo('Power');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'yoga') {


                renderContainerVideo('Yoga');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'none') {


                renderContainerVideo('Without equipment');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'base') {


                renderContainerVideo('Basic equipment');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'all') {


                renderContainerVideo('All equipment of the hall');
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'allTraining') {


                renderContainerVideo('all_training')
                hideBlocks()
                checkButtons()
            } else if (url.searchParams.get('training') === 'shortTraining') {


                renderContainerVideo('short_training');
                hideBlocks()
                checkButtons()
            }


            checkButtons()



            if (url.searchParams.get('lan') === 'en') {
                lang = 'en';
            } else if (url.searchParams.get('lan') === 'ru') {
                lang = 'ru';
            }
            yaTranslateInit(lang)
            /********************* */
        })
    }



    closeRenderContainerVideo() {
        let urlObj = new URL(window.location.href);
        if ((urlObj.hash) === '#training-page') {
            const trainingContainerVideos = document.querySelector('.training_container_videos') as HTMLElement;
            const trainingSearchContainer = document.querySelector('.training_search_container') as HTMLElement;
            const buttonForYou = document.querySelector('.button_for_you') as HTMLElement;
            const buttonSearch = document.querySelector('.button_search') as HTMLElement;

            buttonForYou?.addEventListener('click', () => {
                trainingContainerVideos.innerHTML = '';
                trainingSearchContainer.style.display = 'none';
            });

            buttonSearch?.addEventListener('click', () => trainingSearchContainer.style.display = 'block')

        }
    }

    openBurgerMenu() {
        const menuBtn = document.querySelector('.menu-btn') as HTMLElement;
        const headerNav = document.querySelector('.header-nav') as HTMLElement;
        const body = document.body as HTMLElement;
        menuBtn?.addEventListener('click', (e) => {
            menuBtn.classList.toggle('openBRM');
            headerNav.classList.toggle('navBRM');
            (menuBtn.classList.contains('openBRM') ? headerNav.style.display = 'block' : headerNav.style.display = 'none')
            body.classList.toggle('shadowBody');
            (body.classList.contains('shadowBody')) ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';
            closeBurgerMenu()
        })
    }

    getQueryParams() {
        const url = new URL(window.location.href);
        if (url.searchParams.get('theme')) {
            document.body.classList.remove('dark', 'light');
            document.body.classList.add(url.searchParams.get('theme')!);
        } else if (localStorage.getItem('theme')) {
            document.body.classList.remove('dark', 'light');
            document.body.classList.add(localStorage.getItem('theme')!);
        }
        if (url.searchParams.get('lan')) {
            document.body.classList.remove('ru', 'en');
            document.body.classList.add(url.searchParams.get('lan')!);
        } else if (localStorage.getItem('yt-widget') && (JSON.parse(localStorage.getItem('yt-widget')!)).lang) {
            document.body.classList.remove('ru', 'en');
            document.body.classList.add((JSON.parse(localStorage.getItem('yt-widget')!)).lang);
        }
        if (url.searchParams.get('training')) {
            document.body.classList.remove('forYou', 'search');
            document.body.classList.add(url.searchParams.get('training')!);
        } else if (localStorage.getItem('training')) {
            document.body.classList.remove('forYou', 'search');
            document.body.classList.add(localStorage.getItem('training')!);
        }
    }

    getNavLink() {
        changeActiveNavLink();
    }

    getCurrLang() {
        changeActiveLang()
    }

    callRenderContainerProgrammsVideos() {
        let urlObj = new URL(window.location.href);
        if ((urlObj.hash) === '#program-page') {

            const programmsContainer = document.querySelector('.programms_container') as HTMLElement;

            programmsContainer?.addEventListener('click', (e) => {
                let element = e.target as HTMLInputElement;
                renderContainerProgrammsVideos(String(element.closest('.programms_card')?.getAttribute('data-videoTypeProgramms')))
                programmsContainer.style.display = "none";
            })

        }
    }


    playVideoProgramms() {
        let urlObj = new URL(window.location.href);
        let tmpNum = 1;

        if ((urlObj.hash) === '#program-page') {
            const trainingContainerProgrammsVideos = document.querySelector('.programms_container_videos') as HTMLElement;
            const fon = document.querySelector(".training_fon") as HTMLElement;
            const buttonClose = document.querySelector(".close_modal_window");
            trainingContainerProgrammsVideos?.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;

                if (target.closest('.workout-card')) {
                    let dataIndex = target.closest('.programms_current_video')?.getAttribute('data-curvideo')

                    if (tmpNum >= 4) {
                        tmpNum = 1;

                        if (Number(dataIndex) === tmpNum) {
                            openModalWindowPlayProgramms(String(target.closest('.workout-card')?.getAttribute('data-index')))
                            tmpNum++;
                        }


                    } else if (Number(dataIndex) === tmpNum) {
                        openModalWindowPlayProgramms(String(target.closest('.workout-card')?.getAttribute('data-index')))
                        tmpNum++
                    }
                }
            })

            buttonClose?.addEventListener("click", () => {
                const player = document.querySelector("iframe") as HTMLElement;
                player.remove();
                const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
                modalWindow.classList.add("training_none");
                fon.classList.add("training_none");
            })

            fon?.addEventListener("click", () => {
                const player = document.querySelector("iframe") as HTMLElement;
                player.remove();
                const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
                modalWindow.classList.add("training_none");
                fon.classList.add("training_none");
            })
        }
    }

    paginationActivity() {
        const arrowLeftActivity = document.querySelector(".pagination_arrow_left") as HTMLElement;
        const arrowRightActivity = document.querySelector(".pagination_arrow_right") as HTMLElement;
        arrowLeftActivity.addEventListener("click", shiftLeftActivity);
        arrowRightActivity.addEventListener("click", shiftRightActivity);
    }

    programmsActivity() {
        const programmContainer = document.querySelectorAll(".programms_container_videos") as NodeListOf<HTMLElement>;
        programmContainer?.forEach((el) => el.addEventListener("click", activityTrainingSearch));

    }

    run() {
        this.getQueryParams();
        const hash = window.location.hash.slice(1);
        App.container.append(this.header.render());
        hash ? App.renderNewPage(hash) : App.renderNewPage('main-page');
        App.container.append(this.footer.render());
        this.enableRouterChange();
        this.openBurgerMenu();
        this.checkResizeWindow();
        this.yaTranslateForPages();
        this.closeForms();
        this.btnSignIn();
        this.btnSignUp();
        this.btnSendInvite();
        this.btnLogOut();
        this.linkToOpenSingIn();
        this.callSingUp();
        this.callSingIn();
        this.callFormFriends()
        this.modalUserPurposes();
        this.userInSystem();
        this.userPurposes();
        this.callRenderContainerVideos();
        this.playVideoSearch();
        this.getValueInputSearch();
        this.playListVideoSearch();
        this.closeRenderContainerVideo();
        this.getNavLink();
        this.changeTheme();
        if (hash === "training-page") {
            this.clickBtnTraining();
        }

        this.getCurrLang();
        this.callRenderContainerProgrammsVideos();
        this.playVideoProgramms();

        if (hash === "activity-page") {
            createItemsActivity();
            this.paginationActivity();
        }
        if (hash === "program-page") {
            this.programmsActivity();
        }
    }
}

export default App;
