export const renderWorkOutCard = (img:string, name:string, time:number, description:string = 'empty', equipment: string ) => {
    return(`
    <div class="workout-card">
    <div class="container">
        <img class="workout-card__image" src="${img}" alt="class image">
        <p class="workout-card__name">
           ${name}
        </p>
        <div class="workout-card__time">
            <img class="workout-card__time_icon" src="./imgs/time.png" alt="time">
            <p class="workout-card__time_descrioption">
                время тренировки: ${time}, уровень сложности
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
                необходимое оборудование: ${equipment}
            </p>
        </div>
        <p class="workout-card__description">
            ${description}
        </p>
        <button class="workout-card__start">
            Начать тренировку
        </button>
    </div>
    </div>
    `)
}