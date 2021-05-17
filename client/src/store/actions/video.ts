import {
    IDeleteChannelImg,
    IGetChannelImg,
    IGetVideoError,
    IGetVideoStart,
    IGetVideoSuccess,
    VideoAction,
    videoActionTypes
} from "../../types/video";
import {Dispatch} from "redux";
import axios from "axios";
import {url} from "../../urls";


export const getVideoFetch = () => async (dispatch:Dispatch<VideoAction>, getState: any) => {
    try {
        dispatch(getVideoStart())
        dispatch(deleteChannelImg())
        const videoResponse = await axios.get(`${url.search}&reqionCode=RU$chart=mostPopular`)
        await dispatch(getVideoSuccess(videoResponse.data.items))
        try {
            const videos = getState().video.videos
            videos.map(async (item: any) =>{
                const channelImgResponse = await axios.get(`${url.channelImg}&id=${item.snippet.channelId}`)
                console.log(item.snippet.channelId)
                console.log(channelImgResponse.data.items[0].snippet.thumbnails.default.url)
                await dispatch(getChannelImg(channelImgResponse.data.items[0].snippet.thumbnails.default.url))
            })
        } catch (e) {
            dispatch(getVideoError(e.response.error.message))
        }

    } catch (e) {
        dispatch(getVideoError(e.response.error.message))
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