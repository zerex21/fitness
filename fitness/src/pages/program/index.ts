import Page from "../../core/templates/pages";

class ProgramPage extends Page{
    constructor(id: string) {
        super(id);
    }

    render() {
        this.container.innerHTML = `
        <div class = "container">
        <div class="programms_container">
            <h1 class="programms_title">Программы</h1>
            <div class="programms_card" data-videoTypeProgramms = "strength">
                <div class="programms_content">
                    <img src="./imgs/children_training.jpg" alt="img">
                    <h2>Тренировка на силу</h2>
                </div>
                <p class="programms_card_text_1">Узнай, как стать сильнее</p>
                <p class="programms_card_text_2">3 видео для всех групп мышц</p>
            </div>
            <div class="programms_card" data-videoTypeProgramms = "body">
                <div class="programms_content">
                    <img src="./imgs/training_basic.jpg" alt="img">
                    <h2>Тренировка на все тело</h2>
                </div>
                <p class="programms_card_text_1">база для твоих результатов</p>
                <p class="programms_card_text_2">без снаряжения</p>
            </div>
            <div class="programms_card" data-videoTypeProgramms = "yoga"">
                <div class="programms_content">
                    <img src="./imgs/training_core.jpg" alt="img">
                    <h2>Йога на весь день</h2>
                </div>
                <p class="programms_card_text_1">Познай дзен</p>
                <p class="programms_card_text_2">Утро, День, Вечер</p>
            </div>
        </div>

        <div ></div>

        <div class="programms_container_videos"></div>

        <div class="training_modal_window training_none">
        <img class="close_modal_window" src="../../imgs/close.png" alt="">
        <div  id ="train_video" class="modal_window_content">

        </div>
        </div>

        <div class="training_fon training_none"></div>
        </div>

        </div>
        `;
        return this.container;
    }
}

export default ProgramPage;