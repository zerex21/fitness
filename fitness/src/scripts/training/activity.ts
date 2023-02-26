import { sliderNewContent, sliderHomeContent } from "../../data/slidersContent";
import { sliderRecommendationContent, allTraining } from "./shift";

interface IActivity {
    purpose?: string,
    muscle?: string,
    linkPic?: string,
    date?: string,
    duration?: number
}

function activityNewSlider(event: Event) {
    const element = event.target as HTMLElement;
    const item = element?.closest(".training_card");
    if (!item) return;
    const index = Number(item.getAttribute("data-index"));

    let arrActivity = [];
    let arrOld = localStorage.getItem('activity');
    if (arrOld) {
        arrActivity = JSON.parse(String(arrOld));
    }

    let dataActivity: IActivity = {};
    switch (sliderNewContent[index].purpose) {
        case "strength":
            dataActivity.purpose = "Сила";
            break;
        case "stamina":
            dataActivity.purpose = "Выносливость";
            break;
        case "move":
            dataActivity.purpose = "Подвижность";
            break;
    }
    switch (sliderNewContent[index].muscle) {
        case "armAndShoulder":
            dataActivity.muscle = "Руки и плечи";
            break;
        case "cheekAndFeet":
            dataActivity.muscle = "Ягодицы и ноги";
            break;
        case "pressAndBody":
            dataActivity.muscle = "Пресс и корпус";
            break;
        case "yoga":
            dataActivity.muscle = "Йога";
            break;
    }
    dataActivity.linkPic = sliderNewContent[index].previewPhoto;

    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let mounths = ["янв", "фев", "мар", "апр", "май", "июнь", "июль", "авг", "сен", "окт", "нояб", "дек"]

    let fullDate: Date = new Date();

    let day = days[fullDate.getDay()];
    let numMounth = fullDate.getDate();
    let mounth = mounths[fullDate.getMonth()];
    let minutes = fullDate.getMinutes();
    let hours = fullDate.getHours();
    dataActivity.date = `${day} ${numMounth} ${mounth}  ${hours}:${minutes}`;
    let duration = sliderNewContent[index].duration;
    dataActivity.duration = duration;
    arrActivity.push(dataActivity);
    localStorage.setItem("activity", JSON.stringify(arrActivity))
}

function activityHomeSlider(event: Event) {
    const element = event.target as HTMLElement;
    const item = element?.closest(".training_card");
    if (!item) return;
    const index = Number(item.getAttribute("data-index"));

    let arrActivity = [];
    let arrOld = localStorage.getItem('activity');
    if (arrOld) {
        arrActivity = JSON.parse(String(arrOld));
    }

    let dataActivity: IActivity = {};
    switch (sliderHomeContent[index].purpose) {
        case "strength":
            dataActivity.purpose = "Сила";
            break;
        case "stamina":
            dataActivity.purpose = "Выносливость";
            break;
        case "move":
            dataActivity.purpose = "Подвижность";
            break;
    }
    switch (sliderHomeContent[index].muscle) {
        case "armAndShoulder":
            dataActivity.muscle = "Руки и плечи";
            break;
        case "cheekAndFeet":
            dataActivity.muscle = "Ягодицы и ноги";
            break;
        case "pressAndBody":
            dataActivity.muscle = "Пресс и корпус";
            break;
        case "yoga":
            dataActivity.muscle = "Йога";
            break;
    }
    dataActivity.linkPic = sliderHomeContent[index].previewPhoto;

    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let mounths = ["янв", "фев", "мар", "апр", "май", "июнь", "июль", "авг", "сен", "окт", "нояб", "дек"]

    let fullDate: Date = new Date();

    let day = days[fullDate.getDay()];
    let numMounth = fullDate.getDate();
    let mounth = mounths[fullDate.getMonth()];
    let minutes = fullDate.getMinutes();
    let hours = fullDate.getHours();
    dataActivity.date = `${day} ${numMounth} ${mounth}  ${hours}:${minutes}`;
    let duration = sliderHomeContent[index].duration;
    dataActivity.duration = duration;
    arrActivity.push(dataActivity);
    localStorage.setItem("activity", JSON.stringify(arrActivity))
}

function activityRecommendationSlider(event: Event) {
    const element = event.target as HTMLElement;
    const item = element?.closest(".training_card");
    if (!item) return;
    const index = Number(item.getAttribute("data-index"));

    let arrActivity = [];
    let arrOld = localStorage.getItem('activity');
    if (arrOld) {
        arrActivity = JSON.parse(String(arrOld));
    }

    let dataActivity: IActivity = {};
    switch (sliderRecommendationContent[index].purpose) {
        case "strength":
            dataActivity.purpose = "Сила";
            break;
        case "stamina":
            dataActivity.purpose = "Выносливость";
            break;
        case "move":
            dataActivity.purpose = "Подвижность";
            break;
    }
    switch (sliderRecommendationContent[index].muscle) {
        case "armAndShoulder":
            dataActivity.muscle = "Руки и плечи";
            break;
        case "cheekAndFeet":
            dataActivity.muscle = "Ягодицы и ноги";
            break;
        case "pressAndBody":
            dataActivity.muscle = "Пресс и корпус";
            break;
        case "yoga":
            dataActivity.muscle = "Йога";
            break;
    }
    dataActivity.linkPic = sliderRecommendationContent[index].previewPhoto;

    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let mounths = ["янв", "фев", "мар", "апр", "май", "июнь", "июль", "авг", "сен", "окт", "нояб", "дек"]

    let fullDate: Date = new Date();

    let day = days[fullDate.getDay()];
    let numMounth = fullDate.getDate();
    let mounth = mounths[fullDate.getMonth()];
    let minutes = fullDate.getMinutes();
    let hours = fullDate.getHours();
    dataActivity.date = `${day} ${numMounth} ${mounth}  ${hours}:${minutes}`;
    let duration = sliderRecommendationContent[index].duration;
    dataActivity.duration = duration;
    arrActivity.push(dataActivity);
    localStorage.setItem("activity", JSON.stringify(arrActivity))
}

function activityTrainingSearch(event: Event) {
    const element = event.target as HTMLElement;
    const item = element?.closest(".workout-card");
    if (!item) return;
    const indexDefault = Number(item.getAttribute("data-index"));
    const index = indexDefault - 1;

    let arrActivity = [];
    let arrOld = localStorage.getItem('activity');
    if (arrOld) {
        arrActivity = JSON.parse(String(arrOld));
    }

    let dataActivity: IActivity = {};
    switch (allTraining[index].purpose) {
        case "strength":
            dataActivity.purpose = "Сила";
            break;
        case "stamina":
            dataActivity.purpose = "Выносливость";
            break;
        case "move":
            dataActivity.purpose = "Подвижность";
            break;
    }
    switch (allTraining[index].muscle) {
        case "armAndShoulder":
            dataActivity.muscle = "Руки и плечи";
            break;
        case "cheekAndFeet":
            dataActivity.muscle = "Ягодицы и ноги";
            break;
        case "pressAndBody":
            dataActivity.muscle = "Пресс и корпус";
            break;
        case "yoga":
            dataActivity.muscle = "Йога";
            break;
    }
    dataActivity.linkPic = allTraining[index].previewPhoto;

    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let mounths = ["янв", "фев", "мар", "апр", "май", "июнь", "июль", "авг", "сен", "окт", "нояб", "дек"]

    let fullDate: Date = new Date();

    let day = days[fullDate.getDay()];
    let numMounth = fullDate.getDate();
    let mounth = mounths[fullDate.getMonth()];
    let minutes = fullDate.getMinutes();
    let hours = fullDate.getHours();
    dataActivity.date = `${day} ${numMounth} ${mounth}  ${hours}:${minutes}`;
    let duration = allTraining[index].duration;
    dataActivity.duration = duration;
    arrActivity.push(dataActivity);
    localStorage.setItem("activity", JSON.stringify(arrActivity))
}
export { activityNewSlider, activityHomeSlider, activityRecommendationSlider, activityTrainingSearch };