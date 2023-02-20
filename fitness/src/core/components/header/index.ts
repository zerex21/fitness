import Component from "../../templates/components";

class Header extends Component {

    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    render() {

        this.container.innerHTML = `
        <div class="container container-header">
        <div id="ytWidget" style="display: none;"></div>
            <div class="logo">
                <img src="./src/imgs/gym-dumbbell-icon.svg" alt="gym">
            </div>
            <nav class="header-nav">
                <ul class="list-navigation">
                    <li class="nav-list__item active-list"><a href="#main-page">Главная</a></li>
                    <li class="nav-list__item"><a href="#training-page">Тренировки</a></li>
                    <li class="nav-list__item"><a href="#activity-page">Активность</a></li>
                    <li class="nav-list__item"><a href="#program-page">Программы</a></li>
                </ul>
            </nav>
            <div class="header-customization">
                <div class="choose-language">
                    <div class="lanRu language-choose" data-ya-lang="ru">Руc</div>
                    <span>/</span>
                    <div class="lanEn" data-ya-lang="en">En</div>
                </div>
                <div class="switch-theme">
                    <div class="switch-theme__white theme-choose">
                        <img src="./src/imgs/icon-sun.svg" alt="sun">
                    </div>
                    <span>/</span>
                    <div class="switch-theme__black">
                        <img src="./src/imgs/moon2.svg" alt="moon">
                    </div>
                </div>
            </div>
            <div class="container-header__bnt">
                <div class="btn-signIn">
                    <button>Войти</button>
                </div>
                <div class="btn-signUp">
                    <button>Регистрация</button>
                </div>
            </div>
            <div class="container-header__user">
            <div class="down-list_user">
                <div class="nickUser"></div>
                <div class="user-purposes">
                    <fieldset>
                        <legend>Выберите ваши цели:</legend>

                        <div>
                          <input class="checkbox-user" type="checkbox" id="strength" name="strength">
                          <label for="strength">Сила</label>
                        </div>

                        <div>
                          <input class="checkbox-user" type="checkbox" id="stamina" name="stamina">
                          <label for="stamina">Выносливость</label>
                        </div>

                        <div>
                            <input class="checkbox-user" type="checkbox" id="move" name="move">
                            <label for="move">Подвижность</label>
                          </div>
                    </fieldset>
                </div>
            </div>
            <div class="btn-logOut">
                <button>Выйти</button>
            </div>
        </div>
        <div class="menu-btn">
        <span></span>
        <span></span>
        <span></span>
    </div>
        <div class="formSingIn">
        <div class="container container-formSingIn">
            <div class="container-form">
                <div>
                  <span class="closeSingIn">&times;</span>
                  <h3>Войти</h3>
                  <p>Пожалуйста заполните форму</p>
                  <hr>
                  <label for="nickName"><b>Ваш ник</b></label>
                  <input class="nickNameSignIn" type="text" placeholder="Введите ник" name="nickName" required>

                  <label for="psw"><b>Пароль</b></label>
                  <input class="pswSignIn" type="password" placeholder="Введите Пароль" name="psw" required>
                  <hr>
                  <div class="incorrectDataSignIn"></div>
                  <button class="enterBtn">Войти</button>
                </div>
              </div>
        </div>
    </div>

<div class="formSignUp">
<div class="container container-formSignUp">
    <div class="container-form">
        <div>
          <span class="closeSingUp">&times;</span>
          <h3>Регистрация</h3>
          <p>Пожалуйста заполните форму</p>
          <hr>
         <!--  <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required> -->
          <label for="nickName"><b>Ваш ник</b></label>
          <input class="nickNameSignUp" type="text" placeholder="Введите ник" name="nickName" required>

          <label for="psw"><b>Пароль</b></label>
          <input class="pswSignUp" type="password" placeholder="Введите Пароль" name="psw" required>
          <hr>
          <div class="incorrectDataSignUp"></div>
          <button class="registerBtn">Зарегистрироваться</button>
        </div>
        <div class="container-signInUp">
          <p>Уже есть аккаун? <p class="linkToSignIn">Войти.</p></p>
        </div>
      </div>
</div>
</div>
        </div>
        `;
        return this.container;
    }

}

export default Header;
