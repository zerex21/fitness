const trainingArrowLeftAll = document.querySelectorAll(".training_arrow_left");
const trainingArrowRightAll = document.querySelectorAll(".training_arrow_right");
const sliderContainerAll = document.querySelectorAll(".training_list");

let countAll = new Array(3).fill(0);
let positionAll = new Array(3).fill(0);

trainingArrowRightAll.forEach((el, i) => el.addEventListener("click", () => {
    if (countAll[i] < 3) {
        positionAll[i] -= 620;
        sliderContainerAll[i].style.transform = `translateX(${positionAll[i]}px)`;
        countAll[i] += 1;
    };
}));
trainingArrowLeftAll.forEach((el, i) => el.addEventListener("click", () => {
    if (countAll[i] > 0) {
        positionAll[i] += 620;
        sliderContainerAll[i].style.transform = `translateX(${positionAll[i]}px)`;
        countAll[i] -= 1;
    }
}));