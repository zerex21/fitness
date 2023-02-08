import Page from "../../core/templates/pages";

class DevelopersPage extends Page{
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
                        Разработчик – широкий термин для группы специалистов, работа которых направлена на создание
                        мобильных и компьютерных приложений, игр, баз данных и прочего программного обеспечения самых
                        различных устройств. Разработчики в своей деятельности умело совмещают творческий подход и
                        строгий язык программирования.
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
                        Разработчик – широкий термин для группы специалистов, работа которых направлена на создание
                        мобильных и компьютерных приложений, игр, баз данных и прочего программного обеспечения самых
                        различных устройств. Разработчики в своей деятельности умело совмещают творческий подход и
                        строгий язык программирования.
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
                        Разработчик – широкий термин для группы специалистов, работа которых направлена на создание
                        мобильных и компьютерных приложений, игр, баз данных и прочего программного обеспечения самых
                        различных устройств. Разработчики в своей деятельности умело совмещают творческий подход и
                        строгий язык программирования.
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