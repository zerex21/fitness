import { sliderNewContent, sliderHomeContent } from "../../data/slidersContent";
import { sliderRecommendationContent } from "./shift";

function openModalWindowNewSlider(event: Event) {
    const element = event.target as HTMLElement;
    const item = element?.closest(".training_card");
    if (!item) return;
    const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
    modalWindow.classList.remove("training_none");
    const fon = document.querySelector(".training_fon") as HTMLElement;
    fon.classList.remove("training_none");
    const modalContent = document.querySelector(".modal_window_content") as HTMLElement;
    const index = Number(item.getAttribute("data-index"));
    modalContent.innerHTML = `${sliderNewContent[index].tag}`;
    const trainingVideo = document.querySelector('iframe') as HTMLElement;
    trainingVideo.className = "training_video";
}

function openModalWindowHomeSlider(event: Event) {
    const element = event.target as HTMLElement;
    const item = element?.closest(".training_card");
    if (!item) return;
    const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
    modalWindow.classList.remove("training_none");
    const fon = document.querySelector(".training_fon") as HTMLElement;
    fon.classList.remove("training_none");
    const modalContent = document.querySelector(".modal_window_content") as HTMLElement;
    const index = Number(item.getAttribute("data-index"));
    modalContent.innerHTML = `${sliderHomeContent[index].tag}`;
    const trainingVideo = document.querySelector('iframe') as HTMLElement;
    trainingVideo.className = "training_video";
}

function openModalWindowRecommendationSlider(event: Event) {
    const element = event.target as HTMLElement;
    const item = element?.closest(".training_card");
    if (!item) return;
    const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
    modalWindow.classList.remove("training_none");
    const fon = document.querySelector(".training_fon") as HTMLElement;
    fon.classList.remove("training_none");
    const modalContent = document.querySelector(".modal_window_content") as HTMLElement;
    const index = Number(item.getAttribute("data-index"));
    modalContent.innerHTML = `${sliderRecommendationContent[index].tag}`;
    const trainingVideo = document.querySelector('iframe') as HTMLElement;
    trainingVideo.className = "training_video";
}

export { openModalWindowNewSlider, openModalWindowHomeSlider, openModalWindowRecommendationSlider }