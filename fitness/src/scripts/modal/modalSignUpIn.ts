import { IUsers } from './../../types/type';
const formSignUp = document.querySelector('.formSignUp') as HTMLElement;
const formSignIn = document.querySelector('.formSingIn') as HTMLElement;
const btnSignIn = document.querySelector('.btn-signIn') as HTMLElement;
const btnSignUp = document.querySelector('.btn-signUp') as HTMLElement;
const closeSingUp = document.querySelector('.closeSingUp') as HTMLElement;
const closeSingIn = document.querySelector('.closeSingIn') as HTMLElement;
const linkToSignIn = document.querySelector('.linkToSignIn') as HTMLElement;

const registerBtn = document.querySelector('.registerBtn') as HTMLButtonElement;
const enterBtn = document.querySelector('.enterBtn') as HTMLButtonElement;
const nickNameSignIn = document.querySelector('.nickNameSignIn') as HTMLInputElement;
const pswSignIn = document.querySelector('.pswSignIn') as HTMLInputElement;
const nickNameSignUp = document.querySelector('.nickNameSignUp') as HTMLInputElement;
const pswSignUp = document.querySelector('.pswSignUp') as HTMLInputElement;

let idForUsers = 1;
let arrForUsers:IUsers = [];

const openSignIn = ():void => {
  btnSignIn?.addEventListener('click', () => {
    if (formSignIn) formSignIn.style.display = 'block';
  });
}

const openSignUp = ():void => {
  btnSignUp?.addEventListener('click', () => {
    if (formSignUp) formSignUp.style.display = 'block';
  });
}

const closeSignInUp = ():void => {
  closeSingUp?.addEventListener('click', () => {
    if (formSignUp) formSignUp.style.display = 'none';
  });

  closeSingIn?.addEventListener('click', () => {
    if (formSignIn) formSignIn.style.display = 'none';
  });
}

const toOpenSingIn = ():void => {
    linkToSignIn?.addEventListener('click', () => {
      if(linkToSignIn) formSignUp.style.display = 'none';
      formSignIn.style.display = 'block';
    })
   /*  localStorage.removeItem('users') */
}


const singUp = () => {
  registerBtn?.addEventListener('click', () => {

    let {nickName, password} = getValueSingUp();
    if(nickName && password){
      let tmpObj = {id:idForUsers, login: nickName, password: password, purpose: {}};

      if (localStorage.getItem('users')) {
        let arr: string | null = localStorage.getItem('users')

        while(idForUsers < 2 ){
          for(let i = 0 ; i < JSON.parse(String(arr)).length; i++ ){
            arrForUsers.push(JSON.parse(String(arr))[i])
          }
          break;
        }

        arrForUsers.push(tmpObj)
        localStorage.setItem('users',JSON.stringify(arrForUsers))
      } else {
        arrForUsers.push(tmpObj)
        localStorage.setItem('users',JSON.stringify(arrForUsers))
        }
        idForUsers++;
        formSignUp.style.display = 'none';
    }
  });
}

const getValueSingIn = ():{nickName:string, password:string} => {
  let nickName = nickNameSignIn.value;
  let password = pswSignIn.value;
  return {nickName, password};
}

const getValueSingUp = ():{nickName:string, password:string} => {
  let nickName = nickNameSignUp.value;
  let password = pswSignUp.value;
  return {nickName, password};
}


export {closeSignInUp, openSignIn, openSignUp, toOpenSingIn, singUp};
