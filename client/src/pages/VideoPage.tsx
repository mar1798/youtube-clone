import React, {useEffect, useState} from 'react'
import {useTranslation} from "react-i18next";
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
import {useTime} from "../hooks/useTime";
import {useCount} from "../hooks/useCount";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: '20px',
        },
        cardRoot: {
            marginLeft: 150,
            width: '80%',
            marginBottom: '40px',
            marginTop: '20px',
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
        list: {
            width: '20%'
        },
        headText: {
            color: theme.palette.text.primary,
        }
    }),
);


export const VideoPage: React.FC = () => {
    const {t} = useTranslation()
    const classes = useStyles()
    const {id} = useParams<{ id: string }>()
    const {takeTime} = useTime()
    const {takeCount} = useCount()
    const {getSelectedVideoFetch} = useActions()
    const {selectVideo, loading, channelData} = useTypedSelector(state => state.video)
    const {language} = useTypedSelector(state=>state.auth)
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpandOpen = () => {
        setExpanded(true);
    };

    const handleExpandClose = () => {
        setExpanded(false);
    };


    useEffect(() => {
        getSelectedVideoFetch(id)
    }, [])


    return (
        <>
            {loading && <LinearProgress color="secondary"/>}
            <Container maxWidth={"xl"}
            >

                {Object.keys(selectVideo).length && Object.keys(channelData).length &&
                <Card className={classes.cardRoot}>

                    <iframe
                        className={classes.root}
                        width="100%" height="700" src={`https://www.youtube-nocookie.com/embed/${id}?hl=${language.lan}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen
                    />

                    <CardContent>
                        <Typography variant="h5" className={classes.headText} component="p">
                            {selectVideo.items[0].snippet.title}
                        </Typography>
                        <div className={classes.subHead}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {selectVideo.items[0].statistics.viewCount} {t('views')} &bull; {takeTime(selectVideo.items[0].snippet.publishedAt)}
                            </Typography>

                            <div>
                                <IconButton aria-label="add to favorites">
                                    <ThumbUpAltIcon/>

                                </IconButton>
                                <span>{takeCount(selectVideo.items[0].statistics.likeCount)}</span>
                                <IconButton aria-label="share">
                                    <ThumbDownIcon/>
                                </IconButton>
                                <span>{takeCount(selectVideo.items[0].statistics.dislikeCount)}</span>
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
                        subheader={`${takeCount(channelData.items[0].statistics.subscriberCount)} ${t('subscribers')}`}
                    />

                    <CardActions disableSpacing>
                        {!expanded &&
                        <Button className={classes.expand}
                                onClick={handleExpandOpen}
                                aria-expanded={expanded}
                                aria-label="show more" size="small"
                        >
                            <span>{t('more')}</span>
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
                                {t('less')}
                            </Button>
                        </CardContent>
                    </Collapse>
                </Card>
                }

            </Container>
        </>
    )
}