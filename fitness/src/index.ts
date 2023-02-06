import './style.css';
import App from './pages/app';
import { trainingCategoryAll, openCloseList } from './scripts/training/openCloseList';
import { trainingArrowLeftAll, trainingArrowRightAll, shiftLeft, shiftRight } from './scripts/training/shift';
import { buttonForYou, buttonSearch, clickSearch, clickForYou } from './scripts/training/clickButton';

const app = new App();
app.run();

trainingArrowRightAll.forEach((el, i) => el.addEventListener("click", () => shiftLeft(i)));
trainingArrowLeftAll.forEach((el, i) => el.addEventListener("click", () => shiftRight(i)));

trainingCategoryAll.forEach((el, i) => el.addEventListener("click", () => openCloseList(i)));

buttonForYou.addEventListener("click", clickForYou);
buttonSearch.addEventListener("click", clickSearch);