import { VIDEOS } from './../../data/data';


export function openModalWindowPlay(id:string) {
    const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
    modalWindow.classList.remove("training_none");
    const fon = document.querySelector(".training_fon") as HTMLElement;
    fon.classList.remove("training_none");
    const modalContent = document.querySelector(".modal_window_content") as HTMLElement;
    /* const index = Number(item.getAttribute("data-index")); */
   /*  for (let item in VIDEOS) { */
        for (let item in VIDEOS) {

            if (item === 'homeTraining') break;

            for (let i = 0; i < VIDEOS[item].length; i++) {

              if (VIDEOS[item][i].id === Number(id)) {
                  modalContent.innerHTML = `${VIDEOS[item][i].tag}`
              }
            }
          }

       /*  for (let i = 0; i < VIDEOS[item].length; i++) {
            if(VIDEOS[item].id === id){
              modalContent.innerHTML = `${VIDEOS[item].id}`
            }
          tmpArrOutfit.push(VIDEOS[item][i])
        } */

     /*  } */
   /*  modalContent.innerHTML = `${VIDEOS[id].tag}` */;
    const trainingVideo = document.querySelector('iframe') as HTMLElement;
    trainingVideo.className = "training_video";
}
