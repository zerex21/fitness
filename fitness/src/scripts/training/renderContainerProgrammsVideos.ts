import { IVideosCategory } from './../../types/type';
import { VIDEOSPROGRAMMS } from '../../data/data';
import { renderWorkOutCard } from './renderWorkOutCard';

let typeVideo: IVideosCategory;

let checkValue = (value: string): { typeVideo: IVideosCategory} => {
  switch (value) {

    case 'strength':
      typeVideo = VIDEOSPROGRAMMS.strenght;
      break;

    case 'body':
      typeVideo = VIDEOSPROGRAMMS.allBody;
      break;

    case 'yoga':
      typeVideo = VIDEOSPROGRAMMS.yoga;
      break;

  }

  return { typeVideo }
}

export let renderContainerProgrammsVideos = (value: string) => {
  ({ typeVideo } = checkValue(value))

  let trainingContainerProgrammsAll = document.querySelector('.programms_container_videos') as HTMLElement;
  trainingContainerProgrammsAll.innerHTML = '<div class = programms_container_videos__text>Переход к следующему видео осуществляется после загрузки или просмотра предыдущего. После просмотра - видео становиться недоступным. Что бы начать с начала - просмотрите видео до конца.</div>';
  let divVideos = '';

  if (typeVideo) {
    for (let i = 0; i < typeVideo.length; i++) {
      divVideos = typeVideo.map((item: { previewPhoto: string; duration: number; purpose: string; name:string; outfit: string; id:number }) => renderWorkOutCard(item.previewPhoto, '', item.duration, item.purpose, item.name, item.outfit, item.id))
    }
  }

  if (trainingContainerProgrammsAll) {
    trainingContainerProgrammsAll.innerHTML = '<div class = programms_container_videos__text>Переход к следующему видео осуществляется после загрузки или просмотра предыдущего. После просмотра - видео становиться недоступным. Что бы начать с начала - просмотрите видео до конца.</div>';
    let div = document.createElement('div');
    div.className = "wrapper_container_videos";
    trainingContainerProgrammsAll.appendChild(div)

    for (let y = 0; y < divVideos.length; y++) {

      if (divVideos[y] === ',') return false;
      div.innerHTML += `<div class="programms_current_video"  data-curVideo ="${y+1}"><div class = "programms_current_video__num">${y+1}</div>${divVideos[y]}</div>` ;
    }

  }
}
