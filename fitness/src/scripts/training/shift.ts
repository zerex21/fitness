import { sliderNewContent, sliderHomeContent } from "../../data/slidersContent";
import { VIDEOS } from "../../data/data";
import { IVideos, ITraining } from "../../types/type";


let allTraining: ITraining[] = [];
for (let key in VIDEOS) {
    for (let i = 0; i < VIDEOS[key].length; i++) {
        allTraining.push(VIDEOS[key][i])
    }
}

let sliderRecommendationContent: ITraining[] = [];
let countAll = new Array(3).fill(0);
let positionAll = new Array(3).fill(0);
let maxCount: number[] = [sliderNewContent.length, 4, sliderHomeContent.length]

function shiftLeft(i: number): void {
    const sliderContainerAll = document.querySelectorAll(".training_list") as NodeListOf<HTMLElement>;
    if (countAll[i] < maxCount[i] - 3) {
        positionAll[i] -= 420;
        sliderContainerAll[i].style.transform = `translateX(${positionAll[i]}px)`;
        countAll[i] += 1;
    };
}

function shiftRight(i: number): void {
    const sliderContainerAll = document.querySelectorAll(".training_list") as NodeListOf<HTMLElement>;
    if (countAll[i] > 0) {
        positionAll[i] += 420;
        sliderContainerAll[i].style.transform = `translateX(${positionAll[i]}px)`;
        countAll[i] -= 1;
    };
}

function createSliderNew(): void {
    const sliderNew = document.querySelector(".slider_new") as HTMLElement;
    for (let i = 0; i < sliderNewContent.length; i++) {
        const elLi = document.createElement('li') as HTMLElement;
        elLi.className = "training_card";
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
    for (let i = 0; i < sliderHomeContent.length; i++) {
        const elLi = document.createElement('li') as HTMLElement;
        elLi.className = "training_card";
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
    let localRecommendation = localStorage.getItem("purpose");
    let inSystem = localStorage.getItem("inSystem");
    if (localRecommendation?.length !== 0 && localRecommendation !== null) {
        for (let i = 0; i < localRecommendation.length; i++) {
            if (localRecommendation[i] === "strength") {
                for (let i = 0; i < allTraining.length; i++) {
                    if (allTraining[i].purpose === "strength") {
                        sliderRecommendationContent.push(allTraining[i]);
                    }
                }
            }
            if (localRecommendation[i] === "stamina") {
                for (let i = 0; i < allTraining.length; i++) {
                    if (allTraining[i].purpose === "stamina") {
                        sliderRecommendationContent.push(allTraining[i]);
                    }
                }
            }
            if (localRecommendation[i] === "move") {
                for (let i = 0; i < allTraining.length; i++) {
                    if (allTraining[i].purpose === "move") {
                        sliderRecommendationContent.push(allTraining[i]);
                    }
                }
            }
        }
    } else {
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
    // console.log(sliderRecommendationContent);
}
export { shiftLeft, shiftRight, createSliderNew, createSliderHome, createSliderRecommendation };