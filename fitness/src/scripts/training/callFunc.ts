import { VIDEOS } from './../../data/data';
import { renderWorkOutCard } from './renderWorkOutCard';


export let renderContainerVideo = (/* value:string */) =>{
let typeVideo:string = '';
    /* switch (value) {
        case 'Пресс и корпус':
        typeVideo = 'pressAndBody';
        break;

        case 'Руки и плечи':
        typeVideo = 'armAndShoulder';
        break;

        case 'Ягодицы и ноги':
        typeVideo = 'cheekAndFeet';
        break;

        case 'Выносливость':
        typeVideo = 'stamina';
        break;

        case 'Подвижность':
        typeVideo = 'move';
        break;

        case 'Сила':
        typeVideo = 'strength';
        break;

        case 'Йога':
        typeVideo = 'yoga';
        break;

        case 'Без снаряжения':
        typeVideo = 'none'
        break;

        case 'Базовое снаряжение':
        typeVideo = 'base'
        break;

        case 'Все снаряжения зала':
        typeVideo = 'all'
        break;
    } */
let trainingContainer = document.querySelector('.training_container');
let trainingContainerAll = document.querySelector('.training_container__all') as HTMLElement;
let data = VIDEOS.armAndShoulder;

let divVideos = '';

for (let i = 0; i < data.length; i++){
  divVideos = data.map( (item: { previewPhoto: string; purpose: string; duration: number; outfit: string; }) => renderWorkOutCard(item.previewPhoto, item.purpose, item.duration, '',item.outfit ) )
}

if (trainingContainerAll)
trainingContainerAll.innerHTML = divVideos

  /* let trainingSearchContainer = document.querySelector('.training_container');
  trainingSearchContainer?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    console.log(target.closest('.training_category_list'))
    alert(target)
  }) */


}


