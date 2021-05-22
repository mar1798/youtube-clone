export interface videoState {
    loading: boolean,
    videos: Array<any>,
    error: null | string,
    channelImgs: Array<string>,
    selectVideo: any,
    channelData: any,
}

export enum videoActionTypes {
    GET_VIDEO_START = 'GET_VIDEO_START',
    GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS',
    GET_VIDEO_ERROR = 'GET_VIDEO_ERROR',
    GET_CHANNEL_IMG = "GET_CHANNEL_IMG",
    DELETE_CHANNEL_IMG = "DELETE_CHANNEL_IMG",
    GET_SELECTED_VIDEO = "GET_SELECTED_VIDEO",
    GET_CHANNEL_DATA = "GET_CHANNEL_DATA",
}

export interface IGetVideoStart {
    type: videoActionTypes.GET_VIDEO_START
}


export interface IGetSelectedVideo {
    type: videoActionTypes.GET_SELECTED_VIDEO,
    payload: any
}

export interface IGetChannelImg {
    type: videoActionTypes.GET_CHANNEL_IMG,
    payload: string
}

export interface IDeleteChannelImg {
    type: videoActionTypes.DELETE_CHANNEL_IMG
}

export interface IGetVideoSuccess {
    type: videoActionTypes.GET_VIDEO_SUCCESS,
    payload: Array<any>
}

export interface IGetVideoError {
    type: videoActionTypes.GET_VIDEO_ERROR,
    payload: string
}


export interface IGetChannelData {
    type: videoActionTypes.GET_CHANNEL_DATA,
    payload: any
}

export type VideoAction =
    IGetVideoError |
    IGetVideoStart |
    IGetVideoSuccess |
    IGetChannelImg |
    IDeleteChannelImg |
    IGetSelectedVideo |
    IGetChannelData