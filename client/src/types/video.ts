export interface videoState {
    loading: boolean,
    videos: Array<any>,
    error: null | string,
    channelImgs: Array<string>,
}

export enum videoActionTypes {
    GET_VIDEO_START = 'GET_VIDEO_START',
    GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS',
    GET_VIDEO_ERROR = 'GET_VIDEO_ERROR',
    GET_CHANNEL_IMG = "GET_CHANNEL_IMG",
    DELETE_CHANNEL_IMG = "DELETE_CHANNEL_IMG",
}

export interface IGetVideoStart {
    type: videoActionTypes.GET_VIDEO_START
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

export type VideoAction = IGetVideoError | IGetVideoStart | IGetVideoSuccess | IGetChannelImg | IDeleteChannelImg