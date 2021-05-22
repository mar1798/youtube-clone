import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {Container, Divider, LinearProgress} from "@material-ui/core";
import {CardSearch} from "../components/CardSearch";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";





export const SearchPage: React.FC = () => {

    const {loading, videos, channelImgs} = useTypedSelector(state=>state.video)
    const {getVideoFetch} = useActions()
    const {id} = useParams<{id: string}>()



    useEffect(()=>{
        getVideoFetch(id, null)
    }, [])


    return (
        <>
            {loading && <LinearProgress color="secondary"/>}

            <Container  maxWidth={"lg"}  style={{paddingTop: '20px'}}>
                {videos.length > 0 && videos.map((video: any, index:number) =>
                    <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
                    <CardSearch
                        channelTitle={video.snippet.channelTitle}
                        description={video.snippet.description}
                        time={video.snippet.publishedAt}
                        img={video.snippet.thumbnails.medium.url}
                        avatar={channelImgs[index]}
                        title={video.snippet.title}
                    />
                    </Link>
                )}
            </Container>

        </>
    )
}