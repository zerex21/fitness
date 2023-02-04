const formSignUp = document.querySelector(".formSignUp") as HTMLElement;
const formSignIn = document.querySelector(".formSingIn") as HTMLElement;
const btnSignIn = document.querySelector(".btn-signIn") as HTMLElement;
const btnSignUp = document.querySelector(".btn-signUp") as HTMLElement;
const closeSingUp = document.querySelector(".closeSingUp") as HTMLElement;
const closeSingIn = document.querySelector(".closeSingIn") as HTMLElement;
const linkToSignIn = document.querySelector(".linkToSignIn") as HTMLElement;

const openSignIn = ():void => {
  btnSignIn?.addEventListener('click', () => {
    if (formSignIn) formSignIn.style.display = "block";
  });
}

const openSignUp = ():void => {
  btnSignUp?.addEventListener('click', () => {
    if (formSignUp) formSignUp.style.display = "block";
  });
}

const closeSignInUp = ():void => {
  closeSingUp?.addEventListener('click', () => {
    if (formSignUp) formSignUp.style.display = "none";
  });

  closeSingIn?.addEventListener('click', () => {
    if (formSignIn) formSignIn.style.display = "none";
  });
}

const toOpenSingIn = ():void => {
    linkToSignIn?.addEventListener('click', () => {
      if(linkToSignIn) formSignUp.style.display = "none";
      formSignIn.style.display = "block";
    })
}

export  {closeSignInUp, openSignIn, openSignUp, toOpenSingIn};
