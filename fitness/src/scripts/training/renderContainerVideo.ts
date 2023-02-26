import { IVideosCategory, VideosCategory } from './../../types/type';
import { VIDEOS } from '../../data/data';
import { renderWorkOutCard } from './renderWorkOutCard';

let typeVideo: IVideosCategory;
let tmpArrOutfit: IVideosCategory = [];
let tmpString: string | VideosCategory;
let tmpStringType: string;

let checkValue = (value: string): { typeVideo: IVideosCategory, tmpString: string | VideosCategory, tmpStringType: string } => {
  let url = new URL(window.location.href);
  switch (value) {
    case 'Пресс и корпус':
      typeVideo = VIDEOS.pressAndBody;
      url.searchParams.set('training', 'press');
      break;

    case 'Press and housing':
      typeVideo = VIDEOS.pressAndBody;
      url.searchParams.set('training', 'press');
      break;

    case 'Руки и плечи':
      typeVideo = VIDEOS.armAndShoulder;
      url.searchParams.set('training', 'arms');
      break;

    case 'Arms and shoulders':
      typeVideo = VIDEOS.armAndShoulder;
      url.searchParams.set('training', 'arms');
      break;

    case 'Ягодицы и ноги':
      typeVideo = VIDEOS.cheekAndFeet;
      url.searchParams.set('training', 'buttocks');
      break;

    case 'Buttocks and shoulders':
      typeVideo = VIDEOS.cheekAndFeet;
      url.searchParams.set('training', 'buttocks');
      break;

    case 'Выносливость':
      tmpString = 'stamina';
      url.searchParams.set('training', 'endurance');
      break;

    case 'Endurance':
      tmpString = 'stamina';
      url.searchParams.set('training', 'endurance');
      break;

    case 'Подвижность':
      tmpString = 'move';
      url.searchParams.set('training', 'mobility');
      break;

    case 'Mobility':
      tmpString = 'move';
      url.searchParams.set('training', 'mobility');
      break;

    case 'Сила':
      tmpString = 'strength';
      url.searchParams.set('training', 'strength');
      break;

    case 'Power':
      tmpString = 'strength';
      url.searchParams.set('training', 'strength');
      break;

    case 'Йога':
      typeVideo = VIDEOS.yoga;
      url.searchParams.set('training', 'yoga');
      break;

    case 'Yoga':
      typeVideo = VIDEOS.yoga;
      url.searchParams.set('training', 'yoga');
      break;

    case 'Без снаряжения':
      tmpString = 'none';
      url.searchParams.set('training', 'none');
      break;

    case 'Without equipment':
      tmpString = 'none';
      url.searchParams.set('training', 'none');
      break;

    case 'Базовое снаряжение':
      tmpString = 'base';
      url.searchParams.set('training', 'base');
      break;

    case 'Basic equipment':
      tmpString = 'base';
      url.searchParams.set('training', 'base');
      break;

    case 'Все снаряжения зала':
      tmpString = 'all';
      url.searchParams.set('training', 'all');
      break;

    case 'All equipment of the hall':
      tmpString = 'all';
      url.searchParams.set('training', 'all');
      break;

    case 'all_training':
      tmpStringType = 'all_training';
      url.searchParams.set('training', 'allTraining');
      break;

    case 'short_training':
      tmpStringType = 'short_training';
      url.searchParams.set('training', 'shortTraining');
      break;
  }
  history.pushState(null, '', url);
  return { typeVideo, tmpString, tmpStringType }
}
export let renderContainerVideo = (value: string) => {

  const buttonForYou = document.querySelector(".button_for_you") as HTMLElement;
  const buttonSearch = document.querySelector(".button_search") as HTMLElement;
  buttonForYou.removeAttribute("disabled");
  buttonSearch.setAttribute("disabled", "disabled");
  

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
