import React, {useEffect} from "react";
import {Container, Divider, LinearProgress, Paper, Typography} from "@material-ui/core";
import {useActions} from "../hooks/useActions";
import {Link, useParams} from "react-router-dom";
import {CardSearch} from "../components/CardSearch";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const CategoryPage: React.FC = () => {

    const {loading, videos, channelImgs} = useTypedSelector(state => state.video)
    const {getVideoFetch} = useActions()
    const {id, name} = useParams<{ id: string, name: string }>()


    useEffect(() => {
        getVideoFetch(null, id)
    }, [])


    return (
        <>
            <Paper elevation={0} style={{height: 100}}>
                <Container maxWidth="lg" style={{padding: 25}}>
                    <Typography variant="h4">{name}</Typography>
                </Container>
            </Paper>
            <Container maxWidth="lg" style={{padding: '20px 0'}}>
                {loading && <LinearProgress color="secondary"/>}
                <Divider style={{margin: '20px 0'}}/>
                {videos.length > 0 && videos.map((video: any, index: number) =>
                    <Link key={video.id} to={`/video/${video.id}`}>
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