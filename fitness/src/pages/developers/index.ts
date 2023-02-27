import Page from "../../core/templates/pages";

class DevelopersPage extends Page {
    constructor(id: string) {
        super(id);
    }

    render() {
        this.container.innerHTML = `
        <div class="aboutDevelopers">
            <div class="container container-aboutDevelopers">
                <div class="developer-card">
                    <div class="developer-photo">
                        <img src="./src/imgs/30d52c581db742197509da30df.jpg" alt="person">
                    </div>
                    <h3 class="developer-name">Maria</h3>
                    <div class="developer-description">
                    Отвечала за создание страницы "Активности", карточки программы тренировок и карточки тренировки,
                    за роутинг по страницам, передачу параметров в url и переход на страницу с соответствующими типами тренировок при выбранных настройках,
                    за смену цветовой темы.
                    </div>
                    <div class="developer-github">
                        <a href="https://github.com/pashkovichma" target="_blank">GitHub</a>
                    </div>
                </div>
                <div class="developer-card">
                    <div class="developer-photo">
                        <img src="./src/imgs/30d52c581db742197509da30df.jpg" alt="person">
                    </div>
                    <h3 class="developer-name">Vadim</h3>
                    <div class="developer-description">
                        Отвечал за верстку страниц Тренировки >«для тебя», «Программы». Работал с LocalStorage для 
                        хранения информации о активности. Рендер видео в соответсвии с выбранными целями. 
                        Рендер контента на странице «Активность» с учетом действий пользователя.
                    </div>
                    <div class="developer-github">
                        <a href="https://github.com/vadim-sid1993" target="_blank">GitHub</a>
                    </div>
                </div>
                <div class="developer-card">
                    <div class="developer-photo">
                        <img src="./src/imgs/30d52c581db742197509da30df.jpg" alt="person">
                    </div>
                    <h3 class="developer-name">Oleg</h3>
                    <div class="developer-description">
                        Отвечал за создание и взаимодействие с главной страницей, страницей "о разработчиках", страницей "Тренировки>поиск", страницей "Программы",
                        за формы регистрации и входа, работал с LocalStorage для хранения данных пользователей их паролей,
                        имен и списках целей,помогал с "путями",отвечал за создание поиска видео, смену языка.
                    </div>
                    <div class="developer-github">
                        <a href="https://github.com/zerex21?tab=repositories" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </div>`;
        return this.container;
    }
}

export default DevelopersPage;