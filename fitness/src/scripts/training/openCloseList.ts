const trainingCategoryAll = document.querySelectorAll(".training_category_composite") as NodeListOf<HTMLElement>;
const trainingCategoryListAll = document.querySelectorAll(".training_category_list") as NodeListOf<HTMLElement>;

function openCloseList(i: number) {
    trainingCategoryListAll[i].classList.toggle("training_active");
}

export { trainingCategoryAll, openCloseList };