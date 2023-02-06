import Component from "../../templates/components";

class Footer extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    render() {
        this.container.innerHTML = `
        <div class="container container-footer">
            <div class="about-developers">
                <div class="github">
                    <ul class="list-github">
                        <li><a href="https://github.com/zerex21?tab=repositories" target="_blank">OLEG</a></li>
                        <li><a href="https://github.com/vadim-sid1993" target="_blank">VADIM</a></li>
                        <li><a href="https://github.com/pashkovichma" target="_blank">MARIA</a></li>
                    </ul>
                </div>
                <div class="about-developers__page" onclick="window.location.href='#developers-page'">О разработчиках</div>
            </div>
            <div class="date-create">2023</div>
            <div class="RsSchool">
                <a href="https://rs.school/js/" target="_blank"><img src="./src/imgs/rs_school_js.svg"
                        alt="RsSchool"></a>
            </div>
        </div>`;
        return this.container;
    }
}

export default Footer;