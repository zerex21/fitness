const formSignUp = document.querySelector(".formSignUp") as HTMLElement;
const formSignIn = document.querySelector(".formSingIn") as HTMLElement;
const btnSignIn = document.querySelector(".btn-signIn") as HTMLElement;
const btnSignUp = document.querySelector(".btn-signUp") as HTMLElement;
const closeSingUp = document.querySelector(".closeSingUp") as HTMLElement;
const closeSingIn = document.querySelector(".closeSingIn") as HTMLElement;


const signIn = () => {
  btnSignIn?.addEventListener('click', () => {
    if (formSignIn) formSignIn.style.display = "block";
  })
}

const signUp = () => {
  btnSignUp?.addEventListener('click', () => {
  if (formSignUp) formSignUp.style.display = "block";
  })
}

const closeBtn = () => {
  closeSingUp?.addEventListener('click', () => {
    console.log('up')
    if (formSignUp) formSignUp.style.display = "none";
  });

  closeSingIn?.addEventListener('click', () => {
    console.log('in')
    if (formSignIn) formSignIn.style.display = "none";
  })
}

export  {closeBtn, signIn, signUp};
