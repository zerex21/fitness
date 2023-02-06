import Page from "../../core/templates/pages";

class TrainingPage extends Page{
    constructor(id: string) {
        super(id);
    }

    render() {
        this.container.innerHTML = `
        <div class="training_container">
        <div class="training_container">
        <h1 class="training_title">Тренировки</h1>
        <div class="training_buttons">
            <button class="button_for_you" disabled><span>Для тебя</span></button>
            <button class="button_search"><span>Поиск</span></button>
        </div>
        <div class="training_content">
            <div class="training_kind">
                <h3 class="training_title_kind">Новые тренировки</h3>
                <div class="training_slider">
                    <div class="training_arrow training_arrow_left">&lt;</div>
                    <div class="training_kind_container">
                        <ul class="training_list">
                            <li class="training_card">
                                <img src="../imgs/training_1.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_2.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_3.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_4.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="training_arrow training_arrow_right">&gt;</div>
                </div>
            </div>
            <div class="training_kind">
                <h3 class="training_title_kind">Рекомендации для тебя</h3>
                <div class="training_slider">
                    <div class="training_arrow training_arrow_left">&lt;</div>
                    <div class="training_kind_container">
                        <ul class="training_list">
                            <li class="training_card">
                                <img src="../imgs/training_1.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_2.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_3.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_4.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="training_arrow training_arrow_right">&gt;</div>
                </div>
            </div>
            <div class="training_kind">
                <h3 class="training_title_kind">Идеально для дома</h3>
                <div class="training_slider">
                    <div class="training_arrow training_arrow_left">&lt;</div>
                    <div class="training_kind_container">
                        <ul class="training_list">
                            <li class="training_card">
                                <img src="../imgs/training_1.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_2.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_3.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                            <li class="training_card">
                                <img src="../imgs/training_4.jpg" alt="">
                                <div class="training_card_content">
                                    <p class="training_card_content_text">Длительность: 10 мин</p>
                                    <p class="training_card_content_text">Уровень: начинающий</p>
                                    <p class="training_card_content_text">Снаряжения: без снаряжения</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="training_arrow training_arrow_right">&gt;</div>
                </div>
            </div>
        </div>
        <div class="training_search_container training_none">
            <input class="training_input_search" type="text" name="" id="" placeholder="Поиск">
            <div class="training_category training_category_composite">
                <img src="../imgs/group_muscle.jpg" alt="">
                <h3 class="training_name_category">Группы мышц</h3>
            </div>
            <ul class="training_category_list">
                <li>Пресс и корпус</li>
                <li>Руки и плечи</li>
                <li>Ягодицы и ноги</li>
            </ul>
            <div class="training_category training_category_composite">
                <img src="../imgs/purpose.jpg" alt="">
                <h3 class="training_name_category">Цель тренировки</h3>
            </div>
            <ul class="training_category_list">
                <li>Выносливость</li>
                <li>Подвижность</li>
                <li>Сила</li>
                <li>Йога</li>
            </ul>
            <div class="training_category training_category_composite">
                <img src="../imgs/outfit.jpeg" alt="">
                <h3 class="training_name_category">Снаряжение</h3>
            </div>
            <ul class="training_category_list">
                <li>Без снаряжения</li>
                <li>Базовое снаряжение</li>
                <li>Все снаряжения зала</li>
            </ul>
            <div class="training_category">
                <img src="../imgs/short.jpg" alt="">
                <h3 class="training_name_category">Короткие тренировки</h3>
            </div>
            <div class="training_category">
                <img src="../imgs/training_1.jpg" alt="">
                <h3 class="training_name_category">Все тренировки</h3>
            </div>
        </div>
    </div>
        <div class="workout-card"  style="display: none">
                    <div class="container">
                        <img class="workout-card__image" src="./imgs/online-fitness-classes.jpg" alt="class image">
                        <p class="workout-card__name">
                            Название тренировки
                        </p>
                        <div class="workout-card__time">
                            <img class="workout-card__time_icon" src="./imgs/time.png" alt="time">
                            <p class="workout-card__time_descrioption">
                                время тренировки, уровень сложности
                            </p>
                        </div>
                        <div class="workout-card__characteristics">
                            <img class="workout-card__characteristics_icon" src="./imgs/sportman.png" alt="time">
                            <p class="workout-card__characteristics_descrioption">
                                все характеристики
                            </p>
                        </div>
                        <div class="workout-card__equipment">
                            <img class="workout-card__equipment_icon" src="./imgs/time.png" alt="time">
                            <p class="workout-card__equipment_descrioption">
                                необходимое оборудование
                            </p>
                        </div>
                        <p class="workout-card__description">
                            Описание тренировки
                        </p>
                        <button class="workout-card__start">
                            Начать тренировку
                        </button>
                    </div>
                </div> `;
        return this.container;
    }
}

export default TrainingPage;