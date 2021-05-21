import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CardMain} from "../components/CardMain";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container, LinearProgress} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/useActions";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'grid',
            gridGap: '20px',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            width: '90%',

        }
    }),
);


export const MainPage: React.FC = () => {
    const classes = useStyles()
    const {getVideoFetch} = useActions()
    const {loading, videos, channelImgs} = useTypedSelector(state => state.video)



    // const auth = useTypedSelector(state => state.auth)

    useEffect(() => {
        getVideoFetch()
    }, [])



    return (
        <>
            {loading && <LinearProgress color="secondary"/>}

            <Container className={classes.root} maxWidth={"xl"}
            >


                {videos && videos.map((video: any, index:number)=>
                    <Link key={video.id} to={`/video/${video.id}`}>
                        <CardMain
                            channelTitle={video.snippet.channelTitle}
                            description={video.snippet.title}
                            time={video.snippet.publishedAt}
                            img={video.snippet.thumbnails.medium.url}
                            avatar={channelImgs[index]}
                        />
                    </Link>
                )}
            </Container>

        </>

    )
}