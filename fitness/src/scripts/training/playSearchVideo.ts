import { VIDEOS } from './../../data/data';


export function playVideoSearch(name:string) {
    const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
    modalWindow.classList.remove("training_none");
    const fon = document.querySelector(".training_fon") as HTMLElement;
    fon.classList.remove("training_none");
    const modalContent = document.querySelector(".modal_window_content") as HTMLElement;
        for (let item in VIDEOS) {

            if (item === 'homeTraining') break;

            for (let i = 0; i < VIDEOS[item].length; i++) {

              if (VIDEOS[item][i].name === name) {
                  modalContent.innerHTML = `${VIDEOS[item][i].tag}`
              }
            }
          }
    const trainingVideo = document.querySelector('iframe') as HTMLElement;
    trainingVideo.className = "training_video";
}

export let renderListSearch = (value:string) =>{
    let optionsSearch = document.querySelector('.options_search') as HTMLElement;
    let tmpArr = [];

    for (let item in VIDEOS) {

        if (item === 'homeTraining') break;

        for (let i = 0; i < VIDEOS[item].length; i++) {
           const regex = new RegExp(value, 'gi')
          if (VIDEOS[item][i].name?.match(regex)) {
              tmpArr.push(VIDEOS[item][i].name)
          }
        }
      }

      const HTML = tmpArr.map(item =>{
        return `<li>${item}</li>
        `}).join('')

      if(optionsSearch){
        optionsSearch.style.display = 'block'
        optionsSearch.innerHTML = HTML
      }

      if(value === '' || !value) {
        tmpArr = [];
        optionsSearch.style.display = 'none'
      }

}