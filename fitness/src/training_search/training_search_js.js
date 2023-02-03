const trainingCategoryAll = document.querySelectorAll(".training_category_composite");
const trainingCategoryListAll = document.querySelectorAll(".training_category_list");

trainingCategoryAll.forEach((el, i) => el.addEventListener("click", () => {
    trainingCategoryListAll[i].classList.toggle("training_active");
}));