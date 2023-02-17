export type Users = {
  inSystem(arg0: string, inSystem: boolean): {};
  id:number,
  login:string,
  password:number
};

export interface IUsers {
    push(tmpObj: { id: number; login: string; password: string; }): {};
    length: number;
    [index: number]: Users;
}

export interface IVideos {

    [index: string]: IVideosCategory;
}

export type VideosCategory = {
    tag:string,
    previewPhoto:string,
    purpose: string,
    muscle: string,
    duration: number,
    forHome: boolean,
    outfit: string
};

export interface IVideosCategory {
  push: any;
  map: any;
  length: number;
  [index: number]:VideosCategory;
}

export interface ITraining {
  tag: string,
  previewPhoto: string,
  purpose: string,
  muscle: string,
  duration: number,
  forHome: boolean,
  outfit: string
}