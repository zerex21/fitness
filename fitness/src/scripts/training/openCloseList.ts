function openCloseList(i: number): void {
    const trainingCategoryListAll = document.querySelectorAll(".training_category_list") as NodeListOf<HTMLElement>;
    trainingCategoryListAll[i].classList.toggle("training_active");
}

export default openCloseList;