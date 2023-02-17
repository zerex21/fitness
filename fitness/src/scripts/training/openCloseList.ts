function openCloseList(i: number): void {
    const trainingCategoryListAll = document.querySelectorAll(".training_category_list") as NodeListOf<HTMLElement>;
    for (let y = 0; y < trainingCategoryListAll.length; y++) {
        if (trainingCategoryListAll[i].classList.contains('training_active')) {
            trainingCategoryListAll[i].classList.add('training_active')
        } else {
            trainingCategoryListAll[y].classList.remove('training_active')
        }
    }

    if (trainingCategoryListAll[i].classList.contains("training_active")) {
        trainingCategoryListAll[i].classList.remove('training_active')
    } else {
        trainingCategoryListAll[i].classList.add("training_active");
    }

}

export default openCloseList;