function clickSearch(): void {
    const buttonForYou = document.querySelector(".button_for_you") as HTMLElement;
    const buttonSearch = document.querySelector(".button_search") as HTMLElement;
    const trainingForYou = document.querySelector(".training_content") as HTMLElement;
    const trainingSearch = document.querySelector(".training_search_container") as HTMLElement;
    buttonForYou.removeAttribute("disabled");
    trainingForYou.classList.toggle("training_none");
    trainingSearch.classList.toggle("training_none");
    buttonSearch.setAttribute("disabled", "disabled");
}

function clickForYou(): void {
    const buttonForYou = document.querySelector(".button_for_you") as HTMLElement;
    const buttonSearch = document.querySelector(".button_search") as HTMLElement;
    const trainingForYou = document.querySelector(".training_content") as HTMLElement;
    const trainingSearch = document.querySelector(".training_search_container") as HTMLElement;
    buttonSearch.removeAttribute("disabled");
    trainingForYou.classList.toggle("training_none");
    trainingSearch.classList.toggle("training_none");
    buttonForYou.setAttribute("disabled", "disabled");
}

export { clickForYou, clickSearch };