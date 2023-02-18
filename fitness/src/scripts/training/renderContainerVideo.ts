import { IVideosCategory, VideosCategory } from './../../types/type';
import { VIDEOS } from '../../data/data';
import { renderWorkOutCard } from './renderWorkOutCard';

let typeVideo: IVideosCategory;
let tmpArrOutfit: IVideosCategory = [];
let tmpString: string | VideosCategory;
let tmpStringType: string;

let checkValue = (value: string): { typeVideo: IVideosCategory, tmpString: string | VideosCategory, tmpStringType: string } => {
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

    case 'all_training':
      tmpStringType = 'all_training'
      break;

    case 'short_training':
      tmpStringType = 'short_training'
      break;
  }
  return { typeVideo, tmpString, tmpStringType }
}

export let renderContainerVideo = (value: string) => {
  tmpString = '' ;
  tmpStringType = '';
  ({ typeVideo, tmpString, tmpStringType } = checkValue(value))

  let trainingContainerAll = document.querySelector('.training_container_videos') as HTMLElement;
  trainingContainerAll.innerHTML = '';
  let divVideos = '';

  if (typeVideo) {
    divVideos = '';
    tmpArrOutfit = [];
    for (let i = 0; i < typeVideo.length; i++) {
      divVideos = typeVideo.map((item: { previewPhoto: string; duration: number; purpose: string; name:string; outfit: string; id:number }) => renderWorkOutCard(item.previewPhoto, '', item.duration, item.purpose, item.name, item.outfit, item.id))
    }
  }

  if (tmpString) {
    divVideos = '';
    tmpArrOutfit = [];
    for (let item in VIDEOS) {

      if (item === 'homeTraining') break;

      for (let i = 0; i < VIDEOS[item].length; i++) {

        if (VIDEOS[item][i].purpose === tmpString || VIDEOS[item][i].outfit === tmpString) {
          tmpArrOutfit.push(VIDEOS[item][i])
        }
      }
    }


    for (let i = 0; i < tmpArrOutfit.length; i++) {
      divVideos = tmpArrOutfit.map((item: { previewPhoto: string; duration: number; purpose: string; name:string; outfit: string; id:number }) => renderWorkOutCard(item.previewPhoto, '', item.duration, item.purpose, item.name, item.outfit, item.id))
    }
  }

  if (tmpStringType) {
  /*    divVideos = '';
    tmpArrOutfit = []; */
    if (tmpStringType === 'all_training') {
      for (let item in VIDEOS) {

        if (item === 'homeTraining') break;

        for (let i = 0; i < VIDEOS[item].length; i++) {
          tmpArrOutfit.push(VIDEOS[item][i])
        }

      }
    }

    if (tmpStringType === 'short_training') {
     /*  divVideos = '';
      tmpArrOutfit = []; */
      for (let item in VIDEOS) {

        if (item === 'homeTraining') break;

        for (let i = 0; i < VIDEOS[item].length; i++) {

          if (VIDEOS[item][i].duration <= 8) {
            tmpArrOutfit.push(VIDEOS[item][i])
          }
        }
      }
    }

    for (let i = 0; i < tmpArrOutfit.length; i++) {
      divVideos = tmpArrOutfit.map((item: { previewPhoto: string; duration: number; purpose: string; name:string; outfit: string; id:number}) => renderWorkOutCard(item.previewPhoto, '', item.duration, item.purpose, item.name, item.outfit, item.id))
    }
  }

  if (trainingContainerAll) {

    trainingContainerAll.innerHTML = '';

    for (let y = 0; y < divVideos.length; y++) {

      if (divVideos[y] === ',') return false;
      trainingContainerAll.innerHTML += divVideos[y];
    }

  }
}
