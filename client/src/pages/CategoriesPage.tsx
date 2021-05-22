import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {Container, Divider, LinearProgress, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {CardCategory} from "../components/CardCategory";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CardSearch} from "../components/CardSearch";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            gridGap: 5,
        },
        text: {
            color: theme.palette.text.primary
        },
        divider: {
            marginTop: 20,
        }
    }),
);



export const CategoriesPage: React.FC = () => {
    const {t} = useTranslation()

    const categories = [
        {
            id: 10,
            img: 'https://www.youtube.com/img/explore/destinations/icons/music_color_64.png',
            text: t('music')
        },
        {
            id: 17,
            img: 'https://www.youtube.com/img/explore/destinations/icons/sports_color_64.png',
            text: t('sport')
        },
        {
            id: 20,
            img: 'https://www.youtube.com/img/explore/destinations/icons/gaming_color_64.png',
            text: t('esport')
        },
        {
            id: 25,
            img: 'https://www.youtube.com/img/explore/destinations/icons/news_color_64.png',
            text: t('news')
        },
        {
            id: 26,
            img: 'https://www.youtube.com/img/explore/destinations/icons/fashion_and_beauty_color_64.png',
            text: t('fashion')
        },
        {
            id: 27,
            img: 'https://www.youtube.com/img/explore/destinations/icons/learning_color_64.png',
            text: t('education')
        }
    ]


    const classes = useStyles()
    const {getVideoFetch} = useActions()
    const {loading, videos, channelImgs} = useTypedSelector(state => state.video)

    useEffect(()=> {
        getVideoFetch()
    }, [])



    return (
        <Container maxWidth={"lg"}>
            <div className={classes.root}>
            {categories.map(item =>
                <Link key={item.id} to={`/category/${item.id}/${item.text}`}>
                    <CardCategory img={item.img} text={item.text} />
                </Link>
            )}
            </div>
            {loading && <LinearProgress color='secondary'/>}
            <Divider className={classes.divider}/>
            <Typography variant="h6" className={classes.text}>Популярные видео</Typography>
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
                </Link>)
            }

        </Container>
    )
}