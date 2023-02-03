export type Users = {
  id:number,
  login:string,
  password:number
};

export interface IUsers {
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
  length: number;
  [index: number]:VideosCategory;
}
