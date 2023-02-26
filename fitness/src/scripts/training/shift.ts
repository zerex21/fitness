import { sliderNewContent, sliderHomeContent } from "../../data/slidersContent";
import { VIDEOS } from "../../data/data";
import { IVideos, ITraining } from "../../types/type";


let allTraining: ITraining[] = [];
for (let key in VIDEOS) {
    for (let i = 0; i < VIDEOS[key].length; i++) {
        allTraining.push(VIDEOS[key][i])
    }
}

allTraining.splice(30, 16);

let sliderRecommendationContent: ITraining[] = [];
let countAll = new Array(3).fill(0);
let positionAll = new Array(3).fill(0);
let maxCount: number[] = [sliderNewContent.length, 4, sliderHomeContent.length]

function shiftLeft(i: number): void {
    let step = 0;
    let move = 0;
    if (window.innerWidth >= 1400) {
        step = 420;
        move = 3;
    } else if (window.innerWidth > 739 && window.innerWidth < 1400) {
        step = 305;
        move = 2;
    } else {
        step = 245;
        move = 1;
    }
    const sliderContainerAll = document.querySelectorAll(".training_list") as NodeListOf<HTMLElement>;
    if (countAll[i] < maxCount[i] - move) {
        positionAll[i] -= step;
        sliderContainerAll[i].style.transform = `translateX(${positionAll[i]}px)`;
        countAll[i] += 1;
    };
}

function shiftRight(i: number): void {
    let step = 0;
    if (window.innerWidth >= 1400) {
        step = 420;
    } else if (window.innerWidth > 739 && window.innerWidth <= 1400) {
        step = 305;
    } else {
        step = 245
    }
    const sliderContainerAll = document.querySelectorAll(".training_list") as NodeListOf<HTMLElement>;
    if (countAll[i] > 0) {
        positionAll[i] += step;
        sliderContainerAll[i].style.transform = `translateX(${positionAll[i]}px)`;
        countAll[i] -= 1;
    };
}

function createSliderNew(): void {
    const sliderNew = document.querySelector(".slider_new") as HTMLElement;
    sliderNew.innerHTML = ' ';
    for (let i = 0; i < sliderNewContent.length; i++) {
        const elLi = document.createElement('li') as HTMLElement;
        elLi.className = "training_card";
        elLi.setAttribute("data-index", `${i}`);
        sliderNew.append(elLi);
        const cardImg = document.createElement('img') as HTMLImageElement;
        cardImg.src = sliderNewContent[i].previewPhoto;
        const cardContent = document.createElement('div') as HTMLDivElement;
        cardContent.className = "training_card_content";
        elLi.append(cardImg, cardContent);
        const cardTextOne = document.createElement('p');
        cardTextOne.className = "training_card_content_text";
        cardTextOne.innerHTML = `Длительность ${sliderNewContent[i].duration} мин`;
        const cardTextTwo = document.createElement('p');
        cardTextTwo.className = "training_card_content_text";
        if (sliderNewContent[i].outfit === "all") {
            cardTextTwo.innerHTML = "Снаряжение: все снаряжения зала";
        } else if (sliderNewContent[i].outfit === "base") {
            cardTextTwo.innerHTML = "Снаряжение: базовое снаряжение";
        } else {
            cardTextTwo.innerHTML = "Снаряжение: без снаряжения";
        }
        cardContent.append(cardTextOne, cardTextTwo);
    }
}

function createSliderHome(): void {
    const sliderNew = document.querySelector(".slider_home") as HTMLElement;
    sliderNew.innerHTML = ' ';
    for (let i = 0; i < sliderHomeContent.length; i++) {
        const elLi = document.createElement('li') as HTMLElement;
        elLi.className = "training_card";
        elLi.setAttribute("data-index", `${i}`);
        sliderNew.append(elLi);
        const cardImg = document.createElement('img') as HTMLImageElement;
        cardImg.src = sliderHomeContent[i].previewPhoto;
        const cardContent = document.createElement('div') as HTMLDivElement;
        cardContent.className = "training_card_content";
        elLi.append(cardImg, cardContent);
        const cardTextOne = document.createElement('p');
        cardTextOne.className = "training_card_content_text";
        cardTextOne.innerHTML = `Длительность ${sliderHomeContent[i].duration} мин`;
        const cardTextTwo = document.createElement('p');
        cardTextTwo.className = "training_card_content_text";
        if (sliderHomeContent[i].outfit === "all") {
            cardTextTwo.innerHTML = "Снаряжение: все снаряжения зала";
        } else if (sliderHomeContent[i].outfit === "base") {
            cardTextTwo.innerHTML = "Снаряжение: базовое снаряжение";
        } else {
            cardTextTwo.innerHTML = "Снаряжение: без снаряжения";
        }
        cardContent.append(cardTextOne, cardTextTwo);
    }
}

function createSliderRecommendation(): void {
    if (sliderRecommendationContent.length !== 0) {
        sliderRecommendationContent.splice(0, sliderRecommendationContent.length);
    };

    let arrJson: string | null = localStorage.getItem('users');
    let arrLocal = JSON.parse(String(arrJson));

    if (arrLocal !== null) {
        for (let i = 0; i < arrLocal.length; i++) {
            let purposeArr = arrLocal[i].purpose;
            if (arrLocal[i].inSystem === true && purposeArr.length !== 0) {
                for (let i = 0; i < purposeArr.length; i++) {
                    if (purposeArr[i] === "strength") {
                        for (let i = 0; i < allTraining.length; i++) {
                            if (allTraining[i].purpose === "strength") {
                                sliderRecommendationContent.push(allTraining[i]);
                            }
                        }
                    };
                    if (purposeArr[i] === "stamina") {
                        for (let i = 0; i < allTraining.length; i++) {
                            if (allTraining[i].purpose === "stamina") {
                                sliderRecommendationContent.push(allTraining[i]);
                            }
                        }
                    };
                    if (purposeArr[i] === "move") {
                        for (let i = 0; i < allTraining.length; i++) {
                            if (allTraining[i].purpose === "move") {
                                sliderRecommendationContent.push(allTraining[i]);
                            }
                        }
                    };
                }
            }
        }

    }
    if (sliderRecommendationContent.length === 0) {
        for (let i = 0; i < allTraining.length; i++) {
            if (allTraining[i].purpose === "strength") {
                sliderRecommendationContent.push(allTraining[i]);
            }
        }
    }

    maxCount[1] = sliderRecommendationContent.length;
    const sliderNew = document.querySelector(".slider_recommendation") as HTMLElement;
    sliderNew.innerHTML = ' ';
    for (let i = 0; i < sliderRecommendationContent.length; i++) {
        const elLi = document.createElement('li') as HTMLElement;
        elLi.className = "training_card";
        elLi.setAttribute("data-index", `${i}`);
        sliderNew.append(elLi);
        const cardImg = document.createElement('img') as HTMLImageElement;
        cardImg.src = sliderRecommendationContent[i].previewPhoto;
        const cardContent = document.createElement('div') as HTMLDivElement;
        cardContent.className = "training_card_content";
        elLi.append(cardImg, cardContent);
        const cardTextOne = document.createElement('p');
        cardTextOne.className = "training_card_content_text";
        cardTextOne.innerHTML = `Длительность ${sliderRecommendationContent[i].duration} мин`;
        const cardTextTwo = document.createElement('p');
        cardTextTwo.className = "training_card_content_text";
        if (sliderRecommendationContent[i].outfit === "all") {
            cardTextTwo.innerHTML = "Снаряжение: все снаряжения зала";
        } else if (sliderRecommendationContent[i].outfit === "base") {
            cardTextTwo.innerHTML = "Снаряжение: базовое снаряжение";
        } else {
            cardTextTwo.innerHTML = "Снаряжение: без снаряжения";
        }
        cardContent.append(cardTextOne, cardTextTwo);
    }
}



export { shiftLeft, shiftRight, createSliderNew, createSliderHome, createSliderRecommendation, sliderRecommendationContent, allTraining };