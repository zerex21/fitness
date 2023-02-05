import './style.css';
import { trainingCategoryAll, openCloseList } from './scripts/training/openCloseList';
import { trainingArrowLeftAll, trainingArrowRightAll, shiftLeft, shiftRight } from './scripts/training/shift';

trainingArrowRightAll.forEach((el, i) => el.addEventListener("click", () => shiftLeft(i)));
trainingArrowLeftAll.forEach((el, i) => el.addEventListener("click", () => shiftRight(i)));

trainingCategoryAll.forEach((el, i) => el.addEventListener("click", () => openCloseList(i)));