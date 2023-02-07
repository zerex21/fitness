import MainPage from "../main";
import Page from "../../core/templates/pages";
import TrainingPage from "../training";
import ActivityPage from "../activity";
import ProgramPage from "../program";
import DevelopersPage from "../developers";
import Header from "../../core/components/header";
import Footer from "../../core/components/footer";
import ErrorPage, { ErrorTypes } from "../error";
import { closeSignInUp, logOut, openSignIn, openSignUp, singIn, singUp, toOpenSingIn } from "../../scripts/modal/modalSignUpIn";

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
        });
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



    run() {
        App.container.append(this.header.render());
        App.renderNewPage('main-page');
        App.container.append(this.footer.render());
        this.enableRouterChange();
        this.closeForms();
        this.btnSignIn();
        this.btnSignUp();
        this.btnLogOut();
        this.linkToOpenSingIn();
        this.callSingUp();
        this.callSingIn();

    }
}

export default App;