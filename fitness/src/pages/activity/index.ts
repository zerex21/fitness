import Page from "../../core/templates/pages";

class ActivityPage extends Page{
    constructor(id: string) {
        super(id);
    }

    render() {
        this.container.innerHTML = `
        <div class="activity-page">
            <div class="container">
                <div class="active-page__total-workouts">
                    <p class="active-page__workout-quantity bold">1</p>
                    <p class="active-page__workout-quantity-description">Всего тренировок</p>
                </div>
                <div class="active-page__total-time">
                    <p class="active-page__time-quantity bold">15</p>
                    <p class="active-page__time-quantity-description">Всего минут</p>
                </div>
                <div class="active-page__workouts-list">
                    <div class="active-page__workout-item">
                        <p class="active-page__month-year bold">январь 2023 г.</p>
                        <div class="active-page__workout-details">
                            <div class="active-page__video">
                                <img src="./imgs/online-fitness-classes.jpg">
                            </div>
                            <div class="active-page__aim-muscles-time">
                                <p class="aim bold">Сила</p>
                                <p class="muscles bold">для пресса</p>
                                <p class="time">Ср, 18 янв. 15:12</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return this.container;
    }
}

export default ActivityPage;