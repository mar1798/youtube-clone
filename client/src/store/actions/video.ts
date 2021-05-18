import {
    IDeleteChannelImg,
    IGetChannelData,
    IGetChannelImg,
    IGetSelectedVideo,
    IGetVideoError,
    IGetVideoStart,
    IGetVideoSuccess,
    VideoAction,
    videoActionTypes
} from "../../types/video";
import {Dispatch} from "redux";
import axios from "axios";
import {url} from "../../urls";


export const getVideoFetch = (search:null | string = null) => async (dispatch:Dispatch<VideoAction>, getState: any) => {
    try {
        dispatch(getVideoStart())
        dispatch(deleteChannelImg())
        if(search) {
            const videoResponse = await axios.get(`${url.search}&q=${search}`)
            await dispatch(getVideoSuccess(videoResponse.data.items))
        } else {
            const videoResponse = await axios.get(`${url.search}&reqionCode=RU$chart=mostPopular`)
            await dispatch(getVideoSuccess(videoResponse.data.items))
        }
        try {
            const videos = getState().video.videos
            videos.map(async (item: any) =>{
                const channelImgResponse = await axios.get(`${url.channel}&id=${item.snippet.channelId}`)
                // console.log(item.snippet.channelId)
                // console.log(channelImgResponse.data.items[0].snippet.thumbnails.default.url)
                await dispatch(getChannelImg(channelImgResponse.data.items[0].snippet.thumbnails.default.url))
            })
        } catch (e) {
            console.log(e.response)
            dispatch(getVideoError(e.response.data.error.message))
        }

    } catch (e) {
        dispatch(getVideoError(e.response.data.error.message))
    }
}

export const getSelectedVideoFetch = (id: string) => async (dispatch: Dispatch<VideoAction>) => {
    try {
        dispatch(getVideoStart())
        const videoResponse = await axios.get(`${url.video}&id=${id}`)
        await dispatch(getSelectedVideo(videoResponse.data))
        const channelResponse = await axios.get(`${url.channel}&id=${videoResponse.data.items[0].snippet.channelId}`)
        dispatch(getChannelData(channelResponse.data))
    } catch (e) {
        console.log(e)
        dispatch(getVideoError(e.response.data.error.message))
    }
}


const getVideoStart = ():IGetVideoStart => ({
    type: videoActionTypes.GET_VIDEO_START
})

const getVideoSuccess = (payload: []): IGetVideoSuccess => ({
    type: videoActionTypes.GET_VIDEO_SUCCESS,
    payload,
})

const getVideoError = (e : string): IGetVideoError => ({
    type: videoActionTypes.GET_VIDEO_ERROR,
    payload: e
})

const getChannelImg = (payload: string):IGetChannelImg => ({
    type: videoActionTypes.GET_CHANNEL_IMG,
    payload
})

const deleteChannelImg = ():IDeleteChannelImg => ({
    type: videoActionTypes.DELETE_CHANNEL_IMG
})

const getSelectedVideo = (payload: any): IGetSelectedVideo => ({
    type: videoActionTypes.GET_SELECTED_VIDEO,
    payload,
})

const getChannelData = (payload: any): IGetChannelData => ({
    type: videoActionTypes.GET_CHANNEL_DATA,
    payload
})