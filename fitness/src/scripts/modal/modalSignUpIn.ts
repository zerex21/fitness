const modal = document.querySelector(".container-formSignUpAndSingIn") as HTMLElement;

// Get the button that opens the modal
const btnSignIn = document.querySelector(".btn-signIn") as HTMLElement;
const btnSignUp = document.querySelector(".btn-signUp") as HTMLElement;


// Get the <span> element that closes the modal
const close = document.querySelector(".close") as HTMLElement;

// When the user clicks the button, open the modal

let signIn = () => {
  btnSignIn?.addEventListener('click', () => {
    if (modal) modal.style.display = "block";
  })
}

let signUp = () => {
  btnSignUp?.addEventListener('click', () => {
  if (modal) modal.style.display = "block";
  })
}

let closeBtn = () => {
  close?.addEventListener('click', () => {
  /* console.log('asdas') */
  if (modal) modal.style.display = "none";

  })
}


/* btnSignUp?.addEventListener('click', () => {
  if (modal) modal.style.display = "block";
})
 */


/* span?.addEventListener('click', (e) => {
    console.log('asdas')
    if (e.target == modal) {
        if (modal) modal.style.display = "none";
      }
}) */

export  {closeBtn, signIn};
