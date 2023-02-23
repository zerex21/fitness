import Page from "../../core/templates/pages";

class MainPage extends Page{
    constructor(id: string) {
        super(id);
    }

    render() {
        this.container.innerHTML = `
        <div class="main-page">
            <div class="container main-page__container">
                <div class="connection-friends">
                    <div class="text-connection">
                        Объединяйтесь с друзьми!
                    </div>
                    <div class="main-page__btn-join">
                        <button class="button-black">Пригласить</button>
                    </div>
                </div>
                <div class="main-page__description-app">
                    <div>
                        <h3>Тренировка для каждого тела и разума</h3>
                        Приложение Fitness Club закрепит ваши привычки в фитнесе благодаря более быстрым
                        вариантам, инструментам для постановки целей и ежедневному новому контенту. Укрепите свое
                        мышление и мышцы под бесплатным руководством ваших любимых тренеров, спортсменов и экспертов по
                        здоровому образу жизни.
                    </div>
                    <div>
                        <h3>Начать где угодно. Достичь любой цели.</h3>
                        Fitness Club предлагает преднамеренные, прогрессивные программы тренировок с конкретными советами по
                        питанию, восстановлению и мышлению. Широкий спектр программ Fitness Club поможет вам добиться прогресса в
                        соответствии с вашим графиком и с вашей скоростью.
                    </div>
                    <div>
                        <h3>Наши тренеры встретят вас там, где вы находитесь</h3>
                        Независимо от того, с чего вы начинаете, всемирное сообщество веселых и доступных тренеров Fitness Club
                        поможет вам достичь того, к чему вы движетесь. В конце концов, приложение может помочь вам
                        потренироваться, но это люди, которые помогают вам проявить себя.
                    </div>
                </div>
                <div class="main-page__btn-trainings">
                    <button class="button-black" onclick="window.location.href='#training-page'">Перейти к тренировкам</button>
                </div>
                <div class="formCallFriends">
                <div class="container container-formCallFriend">
                    <div class="container-form">
                        <div>
                          <span class="closeCallFriend">&times;</span>
                          <h3>Отправте приглашение вашим друзьям!</h3>
                          <p>Пожалуйста заполните форму</p>
                          <hr>
                          <label for="email"><b>Почта</b></label>
                          <input class="inputEmail" type="email" pattern=".+@globex\.com" size="30" placeholder="Введите почту" required>
                          <hr>
                          <div class="incorrectCallFriend"></div>
                          <div class="correctCallFriend"></div>
                          <button class="sendBtn">Отправить</button>
                        </div>
                      </div>
                </div>
            </div>
            </div>
        </div>`;
        return this.container;
    }
}

export default MainPage;