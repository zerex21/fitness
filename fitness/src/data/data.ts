import { IVideos } from './../types/type';


/* export let users:IUsers = [
    {id:1, login:'name', password:123, purpose: {'1 2 3....'}},
] */

/************
 *
 * all - все снаряжение
 * base - базовое снаряжение
 * none - без снаряжения
 *
 * *********** */

export const VIDEOS:IVideos = {
  armAndShoulder:[
    {
      id: 1,
      tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Y3FHMXGx34A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      previewPhoto:'./src/imgs/preview/maxresdefault.jpg',
      purpose: 'strength',
      muscle: 'armAndShoulder',
      duration: 15.57,
      forHome: false,
      outfit: 'all'
    },
    {
      id: 2,
      tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/xtFsz7zsM2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      previewPhoto:'./src/imgs/preview/2.jpg',
      purpose: 'strength',
      muscle: 'armAndShoulder',
      duration: 6.41,
      forHome: false,
      outfit: 'all'
    },
    {
      id: 3,
      tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/nO6_fnA_R1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      previewPhoto:'./src/imgs/preview/3.jpg',
      purpose: 'strength',
      muscle: 'armAndShoulder',
      duration: 11.44,
      forHome: false,
      outfit: 'all'
    },
    {
      id: 4,
      tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/ep1XhVpH7rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      previewPhoto:'./src/imgs/preview/4.jpg',
      purpose: 'strength',
      muscle: 'armAndShoulder',
      duration: 3.01,
      forHome: false,
      outfit: 'base'
    },
    {
      id: 5,
      tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/dbxcE1YQbMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      previewPhoto:'./src/imgs/preview/5.jpg',
      purpose: 'strength',
      muscle: 'armAndShoulder',
      duration: 10.25,
      forHome: false,
      outfit: 'all'
    },
    {
      id: 6,
      tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/srLZWnPyYR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      previewPhoto:'./src/imgs/preview/6.jpg',
      purpose: 'strength',
      muscle: 'armAndShoulder',
      duration: 12.12,
      forHome: false,
      outfit: 'all'
    },
  ],

  cheekAndFeet:[
      {
        id: 7,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hkgcsbOkKzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/7.jpg',
        purpose: 'strength',
        muscle: 'cheekAndFeet',
        duration: 8.29,
        forHome: false,
        outfit: 'all'
      },
      {
        id: 8,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/k6OV2UVyrrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/8.jpg',
        purpose: 'strength',
        muscle: 'cheekAndFeet',
        duration: 6.49,
        forHome: false,
        outfit: 'all'
      },
      {
        id: 9,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/3WKvjYmFLOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/9.jpg',
        purpose: 'stamina',
        muscle: 'cheekAndFeet',
        duration: 7.16,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 10,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/WBVl85HFP58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/10.jpg',
        purpose: 'stamina',
        muscle: 'cheekAndFeet',
        duration: 15.07,
        forHome: true,
        outfit: 'none'
      },
  ],

  pressAndBody:[
      {
        id: 11,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/LEckrZsihTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/11.jpg',
        purpose: 'stamina',
        muscle: 'pressAndBody',
        duration: 9.27,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 12,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/AbgdZ9okLu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/12.jpg',
        purpose: 'strength',
        muscle: 'pressAndBody',
        duration: 5.31,
        forHome: false,
        outfit: 'all'
      },
      {
        id: 13,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/LFGkvW7CNoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/13.jpg',
        purpose: 'strength',
        muscle: 'pressAndBody',
        duration: 5.31,
        forHome: false,
        outfit: 'base'
      },
      {
        id: 14,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/e1GbGNYIGB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/14.jpg',
        purpose: 'stamina',
        muscle: 'pressAndBody',
        duration: 15.53,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 15,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/IMfY13lrfgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/15.jpg',
        purpose: 'stamina',
        muscle: 'pressAndBody',
        duration: 15.09,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 16,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Ib44QCcjsU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/16.jpg',
        purpose: 'stamina',
        muscle: 'pressAndBody',
        duration: 9.14,
        forHome: true,
        outfit: 'none'
      },
  ],

  yoga:[
      {
        id: 17,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/NCSKTE6BPvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/22.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 14.23,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 18,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/E1JT1CKEOuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/23.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 14.54,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 19,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hj1_a7umGNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/24.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 42.49,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 20,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/J0pzwoaXFJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/25.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 14.45,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 21,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/E5i4rDc_GA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/26.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 30.02,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 22,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hjklQnYRz_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/27.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 16.42,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 23,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/m62MFlPacpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/28.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 21.49,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 24,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/U9UmAhFIm_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/29.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 13.21,
        forHome: true,
        outfit: 'none'
      },
      {
        id: 25,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vyfXzvR6FMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/30.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 12.20,
        forHome: true,
        outfit: 'none'
      },
  ],

  readyProgram:[
      {
        id: 26,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/tk0OPNxPsts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/17.jpg',
        purpose: 'strength',
        muscle: 'readyProgram',
        duration: 6.23,
        forHome: false,
        outfit: 'all'
      },
      {
        id: 27,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/gxplizjhqiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/18.jpg',
        purpose: 'strength',
        muscle: 'readyProgram',
        duration: 10.55,
        forHome: false,
        outfit: 'all'
      },
      {
        id: 28,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/FVpMj2rEJnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/19.jpg',
        purpose: 'strength',
        muscle: 'readyProgram',
        duration: 5.25,
        forHome: false,
        outfit: 'all'
      },
      {
        id: 29,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/RZl1POnPKgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/20.jpg',
        purpose: 'strength',
        muscle: 'readyProgram',
        duration: 8.42,
        forHome: true,
        outfit: 'base'
      },
      {
        id: 30,
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/zDDI-oWLk0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/21.jpg',
        purpose: 'strength',
        muscle: 'readyProgram',
        duration: 5.25,
        forHome: false,
        outfit: 'all'
      },
  ],

  homeTraining:[{
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/3WKvjYmFLOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/9.jpg',
        purpose: 'strength',
        muscle: 'cheekAndFeet',
        duration: 7.16,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/WBVl85HFP58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/10.jpg',
        purpose: 'stamina',
        muscle: 'cheekAndFeet',
        duration: 15.07,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/LEckrZsihTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/11.jpg',
        purpose: 'stamina',
        muscle: 'cheekAndFeet',
        duration: 9.27,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/e1GbGNYIGB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/14.jpg',
        purpose: 'stamina',
        muscle: 'pressAndBody',
        duration: 15.53,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/IMfY13lrfgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/15.jpg',
        purpose: 'stamina',
        muscle: 'pressAndBody',
        duration: 15.09,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Ib44QCcjsU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/16.jpg',
        purpose: 'stamina',
        muscle: 'pressAndBody',
        duration: 9.14,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/RZl1POnPKgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/20.jpg',
        purpose: 'strength',
        muscle: 'pressAndBody',
        duration: 8.42,
        forHome: true,
        outfit: 'base'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/NCSKTE6BPvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/22.jpg',
        purpose: 'move',
        muscle: 'pressAndBody',
        duration: 14.23,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/E1JT1CKEOuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/23.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 14.54,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hj1_a7umGNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/24.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 42.49,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/J0pzwoaXFJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/25.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 14.45,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/E5i4rDc_GA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/26.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 30.02,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hjklQnYRz_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/27.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 16.42,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/m62MFlPacpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/28.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 21.49,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/U9UmAhFIm_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/29.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 13.21,
        forHome: true,
        outfit: 'none'
      },
      {
        tag:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vyfXzvR6FMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        previewPhoto:'./src/imgs/preview/30.jpg',
        purpose: 'move',
        muscle: 'yoga',
        duration: 12.20,
        forHome: true,
        outfit: 'none'
      },
  ],
}