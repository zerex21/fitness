import { IUsers } from './../../types/type';

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


const checkUserInSystem = () =>{
  if (!localStorage.getItem('users')) return false;

  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));
  const containerHeaderUser = document.querySelector('.container-header__user') as HTMLElement;
  const containerHeaderBnt = document.querySelector('.container-header__bnt') as HTMLElement;
  const nickUser = document.querySelector('.nickUser') as HTMLElement;
  for (let i = 0; i < newArr.length; i++){
    if (newArr[i].inSystem === true) {
      containerHeaderUser.style.display = 'flex';
      containerHeaderBnt.style.display ='none';
      nickUser.innerHTML = newArr[i].login[0];
    }
  }
}

const openFormCallFriends = ():void => {
  const formCallFriends = document.querySelector('.formCallFriends') as HTMLElement;
  const correctCallFriend= document.querySelector('.correctCallFriend') as HTMLElement;
        correctCallFriend.style.display = 'none';
     if (formCallFriends) formCallFriends.style.display = 'block';
}

const openSignIn = ():void => {
 const formSingIn = document.querySelector('.formSingIn') as HTMLElement;

    if (formSingIn) formSingIn.style.display = 'block';
}

const openSignUp = ():void => {
  const formSignUp = document.querySelector('.formSignUp') as HTMLElement;

    if (formSignUp) formSignUp.style.display = 'block';
}

const closeFormCallFriends = ():void => {
  const formCallFriends = document.querySelector('.formCallFriends') as HTMLElement;
  if (formCallFriends) formCallFriends.style.display = 'none';
}

const closeSignInUp = ():void => {
  const formSignUp = document.querySelector('.formSignUp') as HTMLElement;
  const formSingIn = document.querySelector('.formSingIn') as HTMLElement;

    if (formSignUp) formSignUp.style.display = 'none';

    if (formSingIn) formSingIn.style.display = 'none';

}



const toOpenSingIn = ():void => {
  const formSignUp = document.querySelector('.formSignUp') as HTMLElement;
  const formSingIn = document.querySelector('.formSingIn') as HTMLElement;

      formSignUp.style.display = 'none';
      formSingIn.style.display = 'block';

}

const singUp = (nickName:string, password:string) => {
  const containerHeaderUser = document.querySelector('.container-header__user') as HTMLElement;
  const containerHeaderBnt = document.querySelector('.container-header__bnt') as HTMLElement;
  const nickUser = document.querySelector('.nickUser') as HTMLElement;
  const nickNameSignUp = document.querySelector('.nickNameSignUp') as HTMLInputElement;
  const pswSignUp = document.querySelector('.pswSignUp') as HTMLInputElement;
  const formSignUp = document.querySelector('.formSignUp') as HTMLElement;
  const incorrectDataSignUp = document.querySelector('.incorrectDataSignUp') as HTMLElement;

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

};

const formFrinedUp = (email:string) => {

  const incorrectCallFriend = document.querySelector('.incorrectCallFriend') as HTMLElement;
  const inputEmail = document.querySelector('.inputEmail') as HTMLInputElement;
  const formCallFriends = document.querySelector('.formCallFriends') as HTMLElement;

  if ( checkformFrinedUp(email) ) {
    /* containerHeaderUser.style.display = 'flex';
    containerHeaderBnt.style.display ='none'; */
    inputEmail.value = '';
    incorrectCallFriend.style.display = 'none';

    setTimeout(()=>{
      formCallFriends.style.display = 'none';
    },2000)
  }
}

const singIn = (nickName:string, password:string) => {
  const containerHeaderUser = document.querySelector('.container-header__user') as HTMLElement;
  const containerHeaderBnt = document.querySelector('.container-header__bnt') as HTMLElement;
  const nickUser = document.querySelector('.nickUser') as HTMLElement;
  const nickNameSignIn = document.querySelector('.nickNameSignIn') as HTMLInputElement;
  const pswSignIn = document.querySelector('.pswSignIn') as HTMLInputElement;
  const formSignIn = document.querySelector('.formSingIn') as HTMLElement;
  const incorrectDataSignIn = document.querySelector('.incorrectDataSignIn') as HTMLElement;

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
}

const checkUserSignUp = (nickName:string, password:string) =>{
  let getNickName = nickName;
  let getPassword = password;
  const incorrectDataSignUp = document.querySelector('.incorrectDataSignUp') as HTMLElement;
  let tmpObj = {id:idForUsers, login: nickName, password: password, purpose: [], inSystem: false};
  let arr: string | null = localStorage.getItem('users');
  let newArr = JSON.parse(String(arr));

  if( !getNickName || !getPassword ) return false

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

const checkformFrinedUp = (email:string) => {
  const incorrectCallFriend = document.querySelector('.incorrectCallFriend') as HTMLElement;
  const correctCallFriend= document.querySelector('.correctCallFriend') as HTMLElement;
  let getEmail = email;
  incorrectCallFriend.style.display = 'none';
  correctCallFriend.style.display = 'none';
  if( !getEmail ) return false

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = getEmail;

  if(reg.test(address) == false) {
    incorrectCallFriend.style.display = 'block';
    incorrectCallFriend.innerHTML = `Неверный адрес почты !`;
  } else {
    correctCallFriend.style.display = 'block';
    correctCallFriend.innerHTML = `Письмо отправленно !`;
    return true;
  }
  return false;
}

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
}




export {closeSignInUp, openSignIn, openSignUp, toOpenSingIn, singUp, singIn, logOut, checkUserPurposes, checkUserInSystem, checkPurposes,closeFormCallFriends, openFormCallFriends, formFrinedUp};
