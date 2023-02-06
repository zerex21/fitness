const trainingArrowLeftAll = document.querySelectorAll(".training_arrow_left") as NodeListOf<HTMLElement>;
const trainingArrowRightAll = document.querySelectorAll(".training_arrow_right") as NodeListOf<HTMLElement>;
const sliderContainerAll = document.querySelectorAll(".training_list") as NodeListOf<HTMLElement>;
let countAll = new Array(3).fill(0);
let positionAll = new Array(3).fill(0);

function shiftLeft(i: number): void {
    if (countAll[i] < 3) {
        positionAll[i] -= 620;
        sliderContainerAll[i].style.transform = `translateX(${positionAll[i]}px)`;
        countAll[i] += 1;
    };
}

function shiftRight(i: number): void {
    if (countAll[i] > 0) {
        positionAll[i] += 620;
        sliderContainerAll[i].style.transform = `translateX(${positionAll[i]}px)`;
        countAll[i] -= 1;
    };
}

export { trainingArrowLeftAll, trainingArrowRightAll, shiftLeft, shiftRight };