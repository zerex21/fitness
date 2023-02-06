import Component from "../../templates/components";

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    render() {
        this.container.innerHTML = `
        <div class="container container-header">
            <div class="logo">
                <img src="./src/imgs/gym-dumbbell-icon.svg" alt="gym">
            </div>
            <nav class="header-nav">
                <ul class="list-navigation">
                    <li class="active-list"><a href="#main-page">Главная</a></li>
                    <li><a href="#training-page">Тренировки</a></li>
                    <li><a href="#activity-page">Активность</a></li>
                    <li><a href="#program-page">Программы</a></li>
                    <!--   <li><a href="#">О разработчикаx</a></li> -->
                </ul>
            </nav>
            <div class="header-customization">
                <div class="choose-language">
                    <div class="lanRu language-choose">Ру</div>
                    <span>/</span>
                    <div class="lanEn">En</div>
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
            <div class="formSignUpAndSingIn" style="display: none">
                <div class="container container-formSignUpAndSingIn">
                    <form>
                        <div class="container-form">

                        <h3>Регистрация/Войти</h3>
                        <p>Пожалуйста заполните форму</p>
                        <hr> 

                    <!--  <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required> -->

                            <label for="nickName"><b>Имя или ник</b></label>
                            <input type="text" placeholder="Введите имя или ник" name="nickName" required>

                            <label for="psw"><b>Пароль</b></label>
                            <input type="password" placeholder="Введите Пароль" name="psw" required>

                            <hr>

                            <button class="registerbtn">Регистрация/Войти</button>
                        </div>

                        <div class="container-signInUp">
                            <p>Уже есть аккаун? <a href="#">Войти</a>.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;
        return this.container;
    }
}

export default Header;