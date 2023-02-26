import Page from "../../core/templates/pages";

class ActivityPage extends Page {
    constructor(id: string) {
        super(id);
    }

    render() {
        this.container.innerHTML = `
        <div class="activity-page">
            <div class="container">
                <div class="active-page__total-workouts">
                    <p class="active-page__workout-quantity bold">0</p>
                    <p class="active-page__workout-quantity-description">Всего тренировок</p>
                </div>
                <div class="active-page__total-time">
                    <p class="active-page__time-quantity bold time-training">0</p>
                    <p class="active-page__time-quantity-description">Всего минут</p>
                </div>
                <div class="active-page__workouts-list">
                    <div class="active-page__workout-item">
                        <p class="active-page__month-year bold"></p>
                    </div>
                </div>
                <div class="pagination_container">
                    <div class="pagination_arrow_left"> &lt;</div>
                    <div class="pagination_number">0/0</div>
                    <div class="pagination_arrow_right">&gt;</div>
                </div>
            </div>
        </div>`;
        return this.container;
    }
}

export default ActivityPage;