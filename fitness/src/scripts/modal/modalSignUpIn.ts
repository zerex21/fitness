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
const userPurposes = document.querySelector('.user-purposes');

let idForUsers = 1;
let arrForUsers:IUsers = [];

const checkPurposes = () => {
  let checkboxes = document.getElementsByClassName('checkbox-user');

  if (localStorage.getItem('users')) {
    let arr: string | null = localStorage.getItem('users');
    let newArr = JSON.parse(String(arr));
    let tmpArr:string[] = [];
    for (let i = 0 ; i < newArr.length; i++) {

      if (newArr[i].inSystem === true) {
        tmpArr = newArr[i].purpose
        }
    }

    if (tmpArr.length) {
      for (let index = 0; index < checkboxes.length; index++) {
        for (let i = 0 ; i < tmpArr.length; i++) {
          if ((checkboxes[index] as HTMLInputElement).name === tmpArr[i]) {
            (checkboxes[index] as HTMLInputElement).checked = true;
          }
        }
      }
    }
  }
}

const checkUserPurposes = () => {
  let checkboxesChecked:string[] = [];
  let checkboxes = document.getElementsByClassName('checkbox-user');

  for (let index = 0; index < checkboxes.length; index++) {
    if ((checkboxes[index] as HTMLInputElement).checked) {
      checkboxesChecked.push((checkboxes[index] as HTMLInputElement).name);
    }
  }

  return checkboxesChecked;
}


userPurposes?.addEventListener('click', (e) => {
let tmpArr: string[] = []
/*  console.log (checkUserPurposes()); */
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
 /*  btnSignIn?.addEventListener('click', () => { */
 const formSingIn = document.querySelector('.formSingIn') as HTMLElement;

    if (formSingIn) formSingIn.style.display = 'block';
  /* }); */
}

const openSignUp = ():void => {
  /* btnSignUp?.addEventListener('click', () => { */
  const formSignUp = document.querySelector('.formSignUp') as HTMLElement;
    if (formSignUp) formSignUp.style.display = 'block';

 /*  }); */
}

/* const openSignUp = ():void => {
  btnSignUp?.addEventListener('click', () => {
    if (formSignUp) formSignUp.style.display = 'block';
  });
} */

const closeSignInUp = ():void => {
  const formSignUp = document.querySelector('.formSignUp') as HTMLElement;
  const formSingIn = document.querySelector('.formSingIn') as HTMLElement;

 /*  closeSingUp?.addEventListener('click', () => { */
    if (formSignUp) formSignUp.style.display = 'none';
  /* }); */

/*   closeSingIn?.addEventListener('click', () => { */
    if (formSingIn) formSingIn.style.display = 'none';
  /* }); */
}



const toOpenSingIn = ():void => {
  const formSignUp = document.querySelector('.formSignUp') as HTMLElement;
  const formSingIn = document.querySelector('.formSingIn') as HTMLElement;
    /* linkToSignIn?.addEventListener('click', () => { */
      /* if(linkToSignIn) */
      formSignUp.style.display = 'none';
      formSingIn.style.display = 'block';
    /* }) */
}

const singUp = (nickName:string, password:string) => {
  const containerHeaderUser = document.querySelector('.container-header__user') as HTMLElement;
  const containerHeaderBnt = document.querySelector('.container-header__bnt') as HTMLElement;
  const nickUser = document.querySelector('.nickUser') as HTMLElement;
  const nickNameSignUp = document.querySelector('.nickNameSignUp') as HTMLInputElement;
  const pswSignUp = document.querySelector('.pswSignUp') as HTMLInputElement;
  const formSignUp = document.querySelector('.formSignUp') as HTMLElement;
  const incorrectDataSignUp = document.querySelector('.incorrectDataSignUp') as HTMLElement;
  /* console.log('signUp',nickName, password ) */
 /*  registerBtn?.addEventListener('click', () => { */
    if ( checkUserSignUp(nickName, password) ) {
      idForUsers++;
      containerHeaderUser.style.display = 'flex';
      containerHeaderBnt.style.display ='none';
      nickUser.innerHTML = `${nickNameSignUp.value[0]}`
      nickNameSignUp.value = '';
      pswSignUp.value = '';
      formSignUp.style.display = 'none';
      incorrectDataSignUp.style.display = 'none';
    }
 /*  }); */
};

const singIn = (nickName:string, password:string) => {
  const containerHeaderUser = document.querySelector('.container-header__user') as HTMLElement;
  const containerHeaderBnt = document.querySelector('.container-header__bnt') as HTMLElement;
  const nickUser = document.querySelector('.nickUser') as HTMLElement;
  const nickNameSignIn = document.querySelector('.nickNameSignIn') as HTMLInputElement;
  const pswSignIn = document.querySelector('.pswSignIn') as HTMLInputElement;
  const formSignIn = document.querySelector('.formSingIn') as HTMLElement;
  const incorrectDataSignIn = document.querySelector('.incorrectDataSignIn') as HTMLElement;
 /*  enterBtn?.addEventListener('click', () => { */

    if ( checkUserSignIn(nickName, password) ) {
      containerHeaderUser.style.display = 'flex';
      containerHeaderBnt.style.display ='none';
      nickUser.innerHTML = `${nickNameSignIn.value[0]}`
      nickNameSignIn.value = '';
      pswSignIn.value = '';
      formSignIn.style.display = 'none';
      incorrectDataSignIn.style.display = 'none';
    }
    checkPurposes()
  /* }) */
}

const checkUserSignUp = (nickName:string, password:string) =>{
  let getNickName = nickName;
  let getPassword = password;
  const incorrectDataSignUp = document.querySelector('.incorrectDataSignUp') as HTMLElement;
  let tmpObj = {id:idForUsers, login: nickName, password: password, purpose: [], inSystem: false};
  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));

  if (localStorage.getItem('users')) {
    tmpObj.inSystem = true;
    tmpObj.id = JSON.parse(String(arr)).length + 1;

    for (let i = 0; i < newArr.length; i++) {
      if (getNickName === newArr[i].login){
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

const checkUserSignIn = (nickName:string, password:string) =>{
  let getNickName = nickName
  let getPassword = password;
  const incorrectDataSignIn = document.querySelector('.incorrectDataSignIn') as HTMLElement;

  if (!localStorage.getItem('users')) return false;

  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));

  for (let i = 0; i < newArr.length; i++) {
    if (getNickName === newArr[i].login) {
      if (getPassword === newArr[i].password) {
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

const logOut = () => {
 /*  btnLogOut?.addEventListener('click', () => { */
 const containerHeaderUser = document.querySelector('.container-header__user') as HTMLElement;
 const containerHeaderBnt = document.querySelector('.container-header__bnt') as HTMLElement;
 let arr: string | null = localStorage.getItem('users');
    let newArr = JSON.parse(String(arr));
    newArr.map( (item: { inSystem: boolean; }) => (item.inSystem === true) ? item.inSystem = false : item.inSystem = false);
    localStorage.setItem('users',JSON.stringify(newArr) );
    arrForUsers = newArr;
    containerHeaderUser.style.display = 'none';
    containerHeaderBnt.style.display ='flex';

    let checkboxes = document.getElementsByClassName('checkbox-user');

    for (let index = 0; index < checkboxes.length; index++) {
      if ((checkboxes[index] as HTMLInputElement).checked) {
        (checkboxes[index] as HTMLInputElement).checked = false;
      }
    }
    /* checkPurposes() */
  /* }) */
}




export {closeSignInUp, openSignIn, openSignUp, toOpenSingIn, singUp, singIn, logOut ,checkUserInSystem, checkPurposes};
