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
const containerHeaderUser = document.querySelector('.container-header__user') as HTMLElement;
const containerHeaderBnt = document.querySelector('.container-header__bnt') as HTMLElement;
const nickUser = document.querySelector('.nickUser') as HTMLElement;
const btnLogOut = document.querySelector('.btn-logOut') as HTMLButtonElement;

let idForUsers = 1;
let arrForUsers:IUsers = [];

const checkUserInSystem = () =>{
  if (!localStorage.getItem('users')) return false;
  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));

  for (let i = 0; i < newArr.length; i++){
    if (newArr[i].inSystem === true) {
      containerHeaderUser.style.display = 'flex';
      containerHeaderBnt.style.display ='none';
      nickUser.innerHTML = newArr[i].login;
    }
  }
}

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
}

const singUp = () => {
  registerBtn?.addEventListener('click', () => {
    if ( checkUserSignUp() ) {
      idForUsers++;
      containerHeaderUser.style.display = 'flex';
      containerHeaderBnt.style.display ='none';
      nickUser.innerHTML = `${nickNameSignUp.value[0]}`
      nickNameSignUp.value = '';
      pswSignUp.value = '';
      formSignUp.style.display = 'none';
      incorrectDataSignUp.style.display = 'none';
    }
  });
};

const singIn = () => {
  enterBtn?.addEventListener('click', () => {
    if ( checkUserSignIn() ) {
      containerHeaderUser.style.display = 'flex';
      containerHeaderBnt.style.display ='none';
      nickUser.innerHTML = `${nickNameSignIn.value[0]}`
      nickNameSignIn.value = '';
      pswSignIn.value = '';
      formSignIn.style.display = 'none';
      incorrectDataSignIn.style.display = 'none';
    }
  })
}

const checkUserSignUp = () =>{
  let {nickName, password} = getValueSingUp();
  let tmpObj = {id:idForUsers, login: nickName, password: password, purpose: [], inSystem: false};
  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));

  if (localStorage.getItem('users')) {
    tmpObj.inSystem = true;
    tmpObj.id = JSON.parse(String(arr)).length + 1;

    for (let i = 0; i < newArr.length; i++) {
      if (nickName === newArr[i].login){
        newArr[i].inSystem = false;
        incorrectDataSignUp.style.display = 'block';
        incorrectDataSignUp.innerHTML = `Такой ник уже существует !`;
        return false;
      }
    }

    while (idForUsers < 2 ) {
      arrForUsers = [];
      for (let i = 0 ; i < JSON.parse(String(arr)).length; i++ ) {
        arrForUsers.push(JSON.parse(String(arr))[i]);
        localStorage.setItem('users',JSON.stringify(arrForUsers));
      }
      break;
    };

    arrForUsers.push(tmpObj);
    localStorage.setItem('users',JSON.stringify(arrForUsers));

  } else {
    tmpObj.inSystem = true;
    arrForUsers.push(tmpObj);
    localStorage.setItem('users',JSON.stringify(arrForUsers));
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
      if (password === newArr[i].password) {
        newArr.map( (item: { inSystem: boolean; login: string;}) => (item.login === nickName) ? item.inSystem = true : item.inSystem = false);
        localStorage.setItem('users',JSON.stringify(newArr) )
        return true;
      }
    }
  }

  incorrectDataSignIn.style.display = 'block';
  incorrectDataSignIn.innerHTML = `Неверный ник или пароль !`;
  return false;
};

btnLogOut?.addEventListener('click', () => {
  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));
  newArr.map( (item: { inSystem: boolean; }) => (item.inSystem === true) ? item.inSystem = false : item.inSystem = false);
  localStorage.setItem('users',JSON.stringify(newArr) );
  arrForUsers = newArr;
  containerHeaderUser.style.display = 'none';
  containerHeaderBnt.style.display ='flex';
})


export {closeSignInUp, openSignIn, openSignUp, toOpenSingIn, singUp, singIn, checkUserInSystem};
