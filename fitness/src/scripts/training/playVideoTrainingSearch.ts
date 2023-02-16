import { VIDEOS } from './../../data/data';


export function openModalWindowPlay(id:string) {
    const modalWindow = document.querySelector(".training_modal_window") as HTMLElement;
    modalWindow.classList.remove("training_none");
    const fon = document.querySelector(".training_fon") as HTMLElement;
    fon.classList.remove("training_none");
    const modalContent = document.querySelector(".modal_window_content") as HTMLElement;
        for (let item in VIDEOS) {

            if (item === 'homeTraining') break;

            for (let i = 0; i < VIDEOS[item].length; i++) {

              if (VIDEOS[item][i].id === Number(id)) {
                  modalContent.innerHTML = `${VIDEOS[item][i].tag}`
              }
            }
          }
    const trainingVideo = document.querySelector('iframe') as HTMLElement;
    trainingVideo.className = "training_video";
}
