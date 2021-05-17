import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar";
import {SideBar} from "../components/Sidebar";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CardMain} from "../components/CardMain";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container, LinearProgress} from "@material-ui/core";
import clsx from "clsx";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/useActions";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'grid',
            gridGap: '20px',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',

        },
        drawerOpen: {
            marginTop: '100px',
            maxWidth: 1350,
            marginLeft: '250px',

        },
        drawerClose: {
            marginTop: '37px',

            maxWidth: 1500,

        }
    }),
);


export const MainPage: React.FC = () => {
    const classes = useStyles()
    const {getVideoFetch} = useActions()
    const {loading, videos, channelImgs} = useTypedSelector(state => state.video)
    const [open, setOpen] = useState<boolean>(false)

    const onSideBarOpen = (open: boolean) => {
        setOpen(open)
    }

    // const auth = useTypedSelector(state => state.auth)

    useEffect(() => {
        getVideoFetch()
    }, [])



    return (
        <>
            <Navbar onSideBarOpen={onSideBarOpen}/>
            <SideBar open={open}/>

            <Container className={clsx(classes.root, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })} maxWidth={false}
            >
                {!videos && loading && <LinearProgress/>}

                {videos && videos.map((video, index)=>
                    <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
                        <CardMain
                            title={video.snippet.channelTitle}
                            description={video.snippet.title}
                            time={video.snippet.publishTime}
                            img={video.snippet.thumbnails.medium.url}
                            avatar={channelImgs[index]}
                        />
                    </Link>
                )}
            </Container>

        </>

    )
}