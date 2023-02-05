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
const incorrectDataSignUp = document.querySelector('.incorrectDataSignUp') as HTMLElement;
const incorrectDataSignIn = document.querySelector('.incorrectDataSignIn') as HTMLElement;

let idForUsers = 1;
let arrForUsers:IUsers = [];

const getValueSingIn = ():{nickName:string, password:string} => {
  let nickName = nickNameSignIn.value.toLowerCase();
  let password = pswSignIn.value;
  return {nickName, password};
};

const getValueSingUp = ():{nickName:string, password:string} => {
  let nickName = nickNameSignUp.value.toLowerCase();
  let password = pswSignUp.value;
  return {nickName, password};
};

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
    /* localStorage.removeItem('users') */
}

const singUp = () => {
  registerBtn?.addEventListener('click', () => {

    let {nickName, password} = getValueSingUp();
    if (nickName && password && checkUserSignUp()) {
      let tmpObj = {id:idForUsers, login: nickName, password: password, purpose: {}};

      if (localStorage.getItem('users')) {
        let arr: string | null = localStorage.getItem('users')
        tmpObj.id = JSON.parse(String(arr)).length + 1;

        while (idForUsers < 2 ) {
          for (let i = 0 ; i < JSON.parse(String(arr)).length; i++ ) {
            arrForUsers.push(JSON.parse(String(arr))[i]);
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
        nickNameSignUp.value = '';
        pswSignUp.value = '';
        formSignUp.style.display = 'none';
        incorrectDataSignUp.style.display = 'none';
    }
  });
};

const singIn = () => {
  enterBtn?.addEventListener('click', () => {

    if (checkUserSignIn()) {
      nickNameSignIn.value = '';
      pswSignIn.value = '';
      formSignIn.style.display = 'none';
      incorrectDataSignIn.style.display = 'none'
    }

  })
}

const checkUserSignUp = () =>{
  let {nickName, password} = getValueSingUp();

  if (!localStorage.getItem('users')) return false;

  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));

  for (let i = 0; i < newArr.length; i++) {
    if (nickName === newArr[i].login){
      incorrectDataSignUp.style.display = 'block';
      incorrectDataSignUp.innerHTML = `Такой ник уже существует !`;
      return false;
    }
  }

  return true;
};

const checkUserSignIn = () =>{
  let {nickName, password} = getValueSingIn();

  if (!localStorage.getItem('users')) return false;

  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));

  for (let i = 0; i < newArr.length; i++) {
    if (nickName === newArr[i].login) {
      if (password === newArr[i].password) return true;
    }
  }

  incorrectDataSignIn.style.display = 'block';
  incorrectDataSignIn.innerHTML = `Неверный ник или пароль !`;
  return false;
};


export {closeSignInUp, openSignIn, openSignUp, toOpenSingIn, singUp, singIn};
