import { IVideosCategory, VideosCategory } from './../../types/type';
import { VIDEOS } from '../../data/data';
import { renderWorkOutCard } from './renderWorkOutCard';

let typeVideo:IVideosCategory;
let tmpArrOutfit:IVideosCategory = [];
let tmpString:string | VideosCategory;

export let renderContainerVideo = (value:string) =>{

    switch (value) {
        case 'Пресс и корпус':
        typeVideo = VIDEOS.pressAndBody;
        break;

        case 'Руки и плечи':
        typeVideo = VIDEOS.armAndShoulder;
        break;

        case 'Ягодицы и ноги':
        typeVideo = VIDEOS.cheekAndFeet;
        break;

        case 'Выносливость':
        tmpString = 'stamina';
        break;

        case 'Подвижность':
        tmpString = 'move';
        break;

        case 'Сила':
        tmpString = 'strength';
        break;

        case 'Йога':
        typeVideo = VIDEOS.yoga;
        break;

        case 'Без снаряжения':
        tmpString = 'none'
        break;

        case 'Базовое снаряжение':
        tmpString = 'base'
        break;

        case 'Все снаряжения зала':
        tmpString = 'all'
        break;
    }
let trainingContainer = document.querySelector('.training_container');
let trainingContainerAll = document.querySelector('.training_container_videos') as HTMLElement;
trainingContainerAll.innerHTML = '';
/* let data = typeVideo; */
let divVideos = '';
let lengthArr:Number | number = Number(VIDEOS.length);

if(typeVideo) {
 /*  console.log('typeVideo',typeVideo) */
  for (let i = 0; i < typeVideo.length; i++){
    divVideos = typeVideo.map( (item: { previewPhoto: string; duration: number;purpose: string;  outfit: string; }) => renderWorkOutCard(item.previewPhoto, '', item.duration, item.purpose, '', item.outfit,  ))
  }
}

if(tmpString) {
  for(let item in VIDEOS){

    for(let i = 0; i < VIDEOS[item].length; i++){
      console.log(VIDEOS[item])
      if (VIDEOS[item][i].purpose === tmpString || VIDEOS[item][i].outfit === tmpString) {
        tmpArrOutfit.push(VIDEOS[item][i])
      }
    }
  }


  for (let i = 0; i < tmpArrOutfit.length; i++){
    divVideos = tmpArrOutfit.map( (item: { previewPhoto: string; duration: number;purpose: string;  outfit: string; }) => renderWorkOutCard(item.previewPhoto, '', item.duration, item.purpose, '', item.outfit,  ))
  }
}

if (trainingContainerAll){
  for (let y = 0; y < divVideos.length; y++){

    if(divVideos[y] === ',') return false;
    trainingContainerAll.innerHTML += divVideos[y];

  }

}


/*   let trainingSearchContainer = document.querySelector('.training_container');
  trainingSearchContainer?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    console.log(target.closest('.training_category_list'))
    alert(target)
  }) */


}

