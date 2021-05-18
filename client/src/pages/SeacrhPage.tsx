import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {Navbar} from "../components/Navbar";
import {SideBar} from "../components/Sidebar";
import {Container, Divider, LinearProgress} from "@material-ui/core";
import {CardSearch} from "../components/CardSearch";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 200,

        },
        drawerOpen: {
            marginTop: '100px',
            marginLeft: '300px'
        },
        drawerClose: {
            marginTop: '37px',

        }
    }),
);




export const SearchPage: React.FC = () => {

    const classes = useStyles()
    const {loading, videos, channelImgs} = useTypedSelector(state=>state.video)
    const {getVideoFetch} = useActions()
    const {id} = useParams<{id: string}>()

    const [open, setOpen] = useState<boolean>(false)

    const onSideBarOpen = (open: boolean) => {
        setOpen(open)
    }

    useEffect(()=>{
        getVideoFetch(id)
    }, [])


    return (
        <>
            <Navbar onSideBarOpen={onSideBarOpen}/>
            <SideBar open={open}/>

            <Container className={clsx(classes.root, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })} maxWidth={"lg"}
            >
                <Divider />

                {loading && <LinearProgress/>}
                {videos && videos.map((video: any, index:number) =>
                    <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
                    <CardSearch
                        channelTitle={video.snippet.channelTitle}
                        description={video.snippet.title}
                        time={video.snippet.publishTime}
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