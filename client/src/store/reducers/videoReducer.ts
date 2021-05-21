import {VideoAction, videoActionTypes, videoState} from "../../types/video";

const initialState: videoState = {
    loading: false,
    videos: [],
    error: null,
    channelImgs: [],
    selectVideo: {},
    channelData: {}
}

export const videoReducer = (state = initialState, action: VideoAction):videoState => {
    switch (action.type) {
        case videoActionTypes.GET_VIDEO_START:
            return {...state, loading: true}
        case videoActionTypes.GET_VIDEO_SUCCESS:
            return {...state, videos: action.payload, loading: false}
        case videoActionTypes.GET_VIDEO_ERROR:
            return {...state, error: action.payload, loading: false}
        case videoActionTypes.GET_CHANNEL_IMG:
            return {...state, channelImgs: [...state.channelImgs, action.payload ]}
        case videoActionTypes.DELETE_CHANNEL_IMG:
            return {...state, channelImgs: [], videos: []}
        case videoActionTypes.GET_SELECTED_VIDEO:
            return {...state, selectVideo: action.payload, loading: false}
        case videoActionTypes.GET_CHANNEL_DATA:
            return {...state, channelData: action.payload, loading: false}
        default:
            return {...state}
    }
}