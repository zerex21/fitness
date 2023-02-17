let checkValues = (equipment:string, purpose:string) => {
    switch (equipment){
        case 'all':
        equipment = 'все снаряжение';
        break;

        case 'base':
        equipment = 'базовое снаряжение';
        break;

        case 'none':
        equipment = 'без снаряжения';
        break;
    }

    switch (purpose){
        case 'strength':
            purpose = 'силу';
        break;

        case 'move':
            purpose = 'подвижность';
        break;

        case 'stamina':
            purpose = 'выносливость';
        break;
    }

    return {equipment, purpose}
}

export const renderWorkOutCard = (img:string, name:string= 'empty', time:number, purpose:string, description:string = 'empty', equipment: string ) => {

    ( {equipment, purpose}  = checkValues(equipment, purpose) )

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
                время тренировки: ${time} мин
            </p>
        </div>
        <div class="workout-card__characteristics">
            <img class="workout-card__characteristics_icon" src="./imgs/sportman.png" alt="time">
            <p class="workout-card__characteristics_descrioption">
                все характеристики: работа на ${purpose}
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

