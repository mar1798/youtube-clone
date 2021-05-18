import React, {useEffect, useState} from 'react'
import {Navbar} from "../components/Navbar";
import {SideBar} from "../components/Sidebar";
import clsx from "clsx";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
    Avatar,
    Badge,
    Button,
    Container,
    Divider,
    LinearProgress
} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {useParams} from "react-router-dom";
import {getSelectedVideoFetch} from "../store/actions/video";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: 100,

        },
        drawerOpen: {
            marginTop: '100px',
            maxWidth: 1350,
            marginLeft: '250px',
            transition: theme.transitions.create('margin, max-width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            marginTop: '37px',
            maxWidth: 1500,
            transition: theme.transitions.create('margin, max-width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        cardRoot: {
            width: '80%',
            marginBottom: '40px',
            backgroundColor: theme.palette.background.default,
            '&.MuiPaper-elevation1': {
                boxShadow: 'none',
            },
        },
        media: {
            height: '600px',
            '& .ytp-expand-pause-overlay .ytp-scroll-min': {
                display: 'none'
            }
        },
        subHead: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiBadge-anchorOriginTopRightRectangle': {
                top: -5,
            }
        },
        expand: {
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
            color: '#606060',
            textTransform: 'uppercase'
        },
        expandClose: {
            color: '#606060',
            textTransform: 'uppercase',
            marginTop: 10,
        },
        avatar: {
            backgroundColor: red[500],
        },
        badge: {
            backgroundColor: '#606060'
        },
        list: {
            width: '20%'
        },
        headText: {
            color: theme.palette.text.primary,
        }
    }),
);


export const VideoPage: React.FC = () => {
    const classes = useStyles()
    const {id} = useParams<{ id: string }>()
    const {getSelectedVideoFetch} = useActions()
    const {selectVideo, loading, channelData} = useTypedSelector(state => state.video)
    const [open, setOpen] = useState<boolean>(false)
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpandOpen = () => {
        setExpanded(true);
    };

    const handleExpandClose = () => {
        setExpanded(false);
    };


    const onSideBarOpen = (open: boolean) => {
        setOpen(open)
    }

    useEffect(() => {
        getSelectedVideoFetch(id)
    }, [])


    const takeTime = (time: string) : string => {
        const currentTime: any = new Date();
        const tookTime: any = new Date(time)
        const min = Math.floor((Math.abs(tookTime - currentTime) / 1000) / 60);
        if (min > 59) {
            const hour = Math.floor(min / 60)
            if (hour > 24) {
                const day = Math.floor(hour / 24)
                if (day > 30) {
                    const month = Math.floor(day / 30)
                    if (month > 12) {
                        const years = Math.floor(month / 12)
                        return `${years} years ago`
                    } else {
                        return `${month} month ago`
                    }
                } else {
                    return `${day} day ago`
                }
            } else {
                return `${hour} ago`
            }

        } else {
            return `${min} minutes ago`
        }
    }



    return (
        <>
            <Navbar onSideBarOpen={onSideBarOpen}/>
            <SideBar open={open}/>

            <Container className={clsx(classes.root, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })} maxWidth={false}
            >
                {loading && <LinearProgress/>}
                {Object.keys(selectVideo).length && Object.keys(channelData).length &&
                <Card className={classes.cardRoot}>
                    <iframe className={classes.media} width="100%" height="100%"
                            src={`https://www.youtube.com/embed/${id}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                    />

                    <CardContent>
                        <Typography variant="h5" className={classes.headText} component="p">
                            {selectVideo.items[0].snippet.title}
                        </Typography>
                        <div className={classes.subHead}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {selectVideo.items[0].statistics.viewCount} просмотров &bull; {takeTime(selectVideo.items[0].snippet.publishedAt)}
                            </Typography>

                            <div>
                                <IconButton aria-label="add to favorites">
                                    <Badge badgeContent={selectVideo.items[0].statistics.likeCount}>
                                        <ThumbUpAltIcon/>
                                    </Badge>

                                </IconButton>
                                <IconButton aria-label="share">
                                    <Badge badgeContent={selectVideo.items[0].statistics.dislikeCount}>
                                        <ThumbDownIcon/>
                                    </Badge>
                                </IconButton>
                            </div>
                        </div>
                    </CardContent>
                    <Divider/>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <img
                                    src={channelData.items[0].snippet.thumbnails.default.url}
                                    width='50' height="50" alt=""
                                />
                            </Avatar>
                        }
                        title={channelData.items[0].snippet.title}
                        subheader={`${channelData.items[0].statistics.subscriberCount} подписчиков`}
                    />

                    <CardActions disableSpacing>
                        {!expanded &&
                        <Button className={classes.expand}
                                onClick={handleExpandOpen}
                                aria-expanded={expanded}
                                aria-label="show more" size="small"
                        >
                            <span>Eще</span>
                        </Button>
                        }
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography>
                                {selectVideo.items[0].snippet.description}
                            </Typography>
                            <Button className={classes.expandClose}
                                    onClick={handleExpandClose}
                                    aria-expanded={expanded}
                                    aria-label="show more" size="small"
                            >
                                Cвернуть
                            </Button>
                        </CardContent>
                    </Collapse>
                </Card>
                }

            </Container>
        </>
    )
}