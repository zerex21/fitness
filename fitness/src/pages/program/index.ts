import Page from "../../core/templates/pages";

class ProgramPage extends Page{
    constructor(id: string) {
        super(id);
    }

    render() {
        this.container.innerHTML = `
        <div class="programms_container container">
            <h1 class="programms_title">Программы</h1>
            <div class="programms_card">
                <div class="programms_content">
                    <img src="./imgs/children_training.jpg" alt="img">
                    <h2>Тренировка на силу</h2>
                </div>
                <p class="programms_card_text_1">Узнай, как стать сильнее</p>
                <p class="programms_card_text_2">3 видео для всех групп мышц</p>
            </div>
            <div class="programms_card">
                <div class="programms_content">
                    <img src="./imgs/training_basic.jpg" alt="img">
                    <h2>Тренировка на все тело</h2>
                </div>
                <p class="programms_card_text_1">база для твоих результатов</p>
                <p class="programms_card_text_2">без снаряжения</p>
            </div>
            <div class="programms_card">
                <div class="programms_content">
                    <img src="./imgs/training_core.jpg" alt="img">
                    <h2>Йога на весь день</h2>
                </div>
                <p class="programms_card_text_1">Познай дзен</p>
                <p class="programms_card_text_2">Утро, День, Вечер</p>
            </div>
        </div>
        <div class="program-card" style="display: none">
        <div class="container">
            <img class="program-card__image" src="./imgs/online-fitness-classes.jpg" alt="class image">
            <p class="program-card__name">
                Название тренировки
            </p>
            <div class="line">
                <div class="program-card__duration">
                    <img class="program-card__duration_icon" src="./imgs/duration.png" alt="duration">
                    <p class="program-card__duration_descrioption">
                        4 недели
                    </p>
                </div>
                <div class="program-card__frequency">
                    <img class="program-card__frequency_icon" src="./imgs/calendar.jpg" alt="frequency">
                    <p class="program-card__frequency_descrioption">
                        4 недели, 3 раза в неделю
                    </p>
                </div>
            </div>
            <div class="line">
                <div class="program-card__level">
                    <img class="program-card__level_icon" src="./imgs/level.png" alt="level">
                    <p class="program-card__level_descrioption">
                        Начальный уровень
                    </p>
                </div>
                <div class="program-card__time">
                    <img class="program-card__time_icon" src="./imgs/time.png" alt="time">
                    <p class="program-card__time_descrioption">
                        Тренировки от 5 до 30 минут
                    </p>
                </div>
            </div>
            <p class="program-card__description">
                Описание тренировки
            </p>
            <p class="program-card__equipment">
                Снаряжение:
            </p>
            <p class="program-card__equipment-description">
                Без снаряжения (коврик по желанию)
            </p>
            <button class="program-card__start">
                Начать тренировку
            </button>
        </div>
    </div>`;
        return this.container;
    }
}

export default ProgramPage;