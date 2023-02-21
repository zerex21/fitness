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
            <svg 
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 122.87 122.88"
                style="enable-background:new 0 0 122.87 122.88"
                xml:space="preserve">
                <g><path
                d="M1.61,97.18l5.38-5.38c0.14-0.14,0.29-0.27,0.44-0.4l-3.86-3.86v0c-0.06-0.06-0.11-0.12-0.16-0.18 c-0.96-1.05-1.44-2.38-1.44-3.7c0-1.4,0.54-2.8,1.61-3.87l0,0l0,0l0,0l5.38-5.38l0,0c0.14-0.14,0.29-0.27,0.44-0.4l-3.86-3.86h0 c-1.07-1.07-1.6-2.48-1.6-3.88c0-1.4,0.54-2.8,1.6-3.87l0,0l0,0l0,0l5.38-5.38c1.07-1.07,2.48-1.6,3.88-1.6 c1.41,0,2.81,0.53,3.88,1.6l47.21,47.21c1.07,1.07,1.6,2.48,1.6,3.88c0,1.41-0.53,2.81-1.6,3.88l-5.38,5.38v0 c-0.06,0.06-0.12,0.11-0.18,0.16c-1.05,0.96-2.38,1.44-3.7,1.44c-1.4,0-2.8-0.54-3.87-1.6l0,0l0,0l0,0l-3.27-3.27 c-0.12,0.15-0.25,0.3-0.39,0.44l0,0l0,0l-5.38,5.38h0c-0.06,0.06-0.12,0.11-0.18,0.16c-1.04,0.95-2.37,1.43-3.7,1.43 c-1.41,0-2.81-0.53-3.87-1.6l0,0l0,0l0,0l-4.46-4.46c-0.12,0.15-0.25,0.3-0.4,0.44l-5.38,5.38c-1.07,1.07-2.48,1.6-3.88,1.6 c-1.4,0-2.81-0.53-3.88-1.6L1.61,104.95C0.54,103.88,0,102.47,0,101.07C0,99.66,0.54,98.26,1.61,97.18L1.61,97.18z M65.85,8.98 l-5.38,5.38h0l-0.05,0.05c-0.08,0.11-0.12,0.24-0.12,0.37c0,0.15,0.06,0.31,0.17,0.42h0l47.21,47.21c0.11,0.11,0.26,0.17,0.42,0.17 c0.15,0,0.31-0.06,0.42-0.17l5.38-5.38l0,0l0.05-0.05c0.08-0.1,0.12-0.24,0.12-0.37c0-0.16-0.05-0.31-0.16-0.42l0,0l0,0l-7.13-7.13 v0L74.41,16.71l-7.72-7.72v0c-0.11-0.11-0.26-0.17-0.42-0.17C66.11,8.81,65.96,8.87,65.85,8.98L65.85,8.98L65.85,8.98L65.85,8.98z M71.47,47.31c1.34-1.34,3.52-1.34,4.87,0c1.34,1.34,1.34,3.52,0,4.87L52.74,75.76c-1.34,1.34-3.52,1.34-4.87,0 c-1.34-1.34-1.34-3.52,0-4.87L71.47,47.31L71.47,47.31z M100.65,5.07l-5.38,5.38l0,0c-0.12,0.12-0.18,0.27-0.18,0.42 c0,0.13,0.04,0.25,0.12,0.36l0.06,0.06l0,0h0l16.32,16.32l0,0l0.05,0.05c0.1,0.08,0.23,0.11,0.36,0.11c0.15,0,0.31-0.06,0.42-0.17 l5.38-5.38v0c0.12-0.12,0.18-0.27,0.18-0.42c0-0.15-0.06-0.31-0.17-0.42l0,0v0L101.49,5.07l0,0c-0.11-0.11-0.26-0.17-0.42-0.17 S100.76,4.96,100.65,5.07L100.65,5.07L100.65,5.07z M91.81,6.98l5.38-5.38l0,0c1.07-1.07,2.48-1.6,3.88-1.6s2.81,0.53,3.88,1.6l0,0 l16.32,16.32h0l0,0l0,0c1.06,1.06,1.6,2.47,1.59,3.87c0,1.41-0.53,2.82-1.59,3.88h0l-5.38,5.38c-0.14,0.14-0.29,0.27-0.44,0.4 l4.46,4.46c1.07,1.07,1.6,2.48,1.6,3.88c0,1.41-0.54,2.81-1.6,3.88l-5.38,5.38l0,0l0,0l0,0c-0.14,0.14-0.29,0.27-0.44,0.39 l3.27,3.27l0,0l0,0l0,0c1.07,1.07,1.6,2.47,1.6,3.87c0,1.33-0.48,2.66-1.44,3.7c-0.05,0.06-0.1,0.12-0.16,0.18l0,0l-5.38,5.38 c-1.07,1.07-2.48,1.6-3.88,1.6c-1.41,0-2.81-0.54-3.88-1.6L57.01,18.66v0c-1.07-1.07-1.61-2.48-1.61-3.88 c0-1.33,0.48-2.66,1.44-3.7c0.05-0.06,0.1-0.12,0.16-0.18l0,0l5.38-5.38l0,0l0,0l0,0c1.07-1.07,2.47-1.6,3.87-1.6 c1.41,0,2.81,0.54,3.88,1.6l0,0l3.86,3.86c0.12-0.15,0.25-0.3,0.4-0.44l5.38-5.38c1.07-1.07,2.48-1.61,3.88-1.61 c1.41,0,2.81,0.54,3.88,1.61l3.86,3.86C91.54,7.27,91.67,7.12,91.81,6.98L91.81,6.98L91.81,6.98z M83.25,7.03l-5.38,5.38 c-0.11,0.11-0.17,0.26-0.17,0.42c0,0.15,0.05,0.3,0.16,0.41l0.01,0.01l32.36,32.36h0c0.11,0.11,0.26,0.17,0.42,0.17 c0.16,0,0.31-0.05,0.42-0.16l0,0h0l5.38-5.38c0.11-0.11,0.17-0.26,0.17-0.42c0-0.15-0.06-0.31-0.17-0.42l-8.31-8.31l0,0l0,0l0,0 l0,0L84.09,7.03c-0.11-0.11-0.27-0.17-0.42-0.17C83.51,6.86,83.36,6.91,83.25,7.03L83.25,7.03z M16.71,74.41L16.71,74.41 l32.36,32.36l0,0l0,0l0,0l0,0l0,0l0,0l0,0l7.11,7.11l0,0l0,0c0.11,0.11,0.27,0.16,0.42,0.16c0.13,0,0.26-0.04,0.37-0.12l0.05-0.05 v0l5.38-5.38c0.11-0.11,0.17-0.26,0.17-0.42c0-0.15-0.06-0.31-0.17-0.42L15.2,60.47c-0.11-0.11-0.26-0.17-0.42-0.17 c-0.15,0-0.31,0.06-0.42,0.17l-5.38,5.38v0l0,0c-0.11,0.11-0.16,0.27-0.16,0.42c0,0.15,0.06,0.31,0.17,0.42v0L16.71,74.41 L16.71,74.41z M45.66,110.29l-0.05-0.05L13.24,77.87h0l-0.06-0.06c-0.11-0.08-0.23-0.12-0.36-0.12c-0.15,0-0.3,0.06-0.42,0.18h0 l-5.38,5.38v0l0,0c-0.11,0.11-0.16,0.27-0.16,0.42c0,0.13,0.04,0.26,0.12,0.37l0.05,0.05v0l7.72,7.72l16.32,16.32l8.32,8.32h0l0,0 c0.12,0.12,0.27,0.17,0.42,0.17c0.13,0,0.26-0.04,0.37-0.12l0.05-0.05h0l5.38-5.38l0,0c0.11-0.11,0.16-0.27,0.16-0.42 C45.77,110.52,45.73,110.39,45.66,110.29L45.66,110.29z M10.45,95.27l-5.38,5.38c-0.11,0.11-0.17,0.26-0.17,0.42 s0.06,0.31,0.17,0.42l16.32,16.32c0.11,0.11,0.26,0.17,0.42,0.17c0.15,0,0.31-0.06,0.42-0.17l5.38-5.38 c0.11-0.11,0.17-0.26,0.17-0.42c0-0.16-0.06-0.31-0.17-0.42L11.28,95.27l-0.01-0.01c-0.11-0.11-0.26-0.16-0.41-0.16 C10.71,95.1,10.56,95.16,10.45,95.27L10.45,95.27z"
                /></g>
            </svg>
                
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
                    <div class="switch-theme__white theme-choose  theme">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="30px"
                            height="30px">
                            <title>sun</title>
                            <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z"
                            />
                        </svg>
                    </div>
                    <span>/</span>
                    <div class="switch-theme__black theme">
                        <svg 
                            width="25px"
                            height="25px"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>moon</title>
                            <path d="M29.223 24.178l-0.021-0.057c-0.116-0.274-0.383-0.463-0.694-0.463-0.104 0-0.202 0.021-0.292 0.059l0.005-0.002c-1.272 0.542-2.752 0.857-4.306 0.857-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l0.074-0.028 0.211-0.089c0.267-0.118 0.45-0.381 0.45-0.687 0-0.375-0.276-0.686-0.635-0.74l-0.004-0.001c-0.653-0.103-1.407-0.161-2.174-0.161-8.145 0-14.748 6.603-14.748 14.748s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l0.025-0.034c0.097-0.125 0.155-0.285 0.155-0.458 0-0.127-0.031-0.246-0.086-0.351l0.002 0.004zM22.518 28.24c-1.497 0.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l0.034-0.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752 0.85 0 1.681-0.083 2.485-0.242l-0.081 0.013c-1.081 0.976-2.339 1.783-3.716 2.364l-0.087 0.033z"></path>
                        </svg>
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
