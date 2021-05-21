import React, {useEffect} from "react";
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

const categories = [
    {
        id: 10,
        img: 'https://www.youtube.com/img/explore/destinations/icons/music_color_64.png',
        text: 'Музыка'
    },
    {
        id: 17,
        img: 'https://www.youtube.com/img/explore/destinations/icons/sports_color_64.png',
        text: 'Спорт'
    },
    {
        id: 20,
        img: 'https://www.youtube.com/img/explore/destinations/icons/gaming_color_64.png',
        text: 'Игры'
    },
    {
        id: 25,
        img: 'https://www.youtube.com/img/explore/destinations/icons/news_color_64.png',
        text: 'Новости'
    },
    {
        id: 26,
        img: 'https://www.youtube.com/img/explore/destinations/icons/fashion_and_beauty_color_64.png',
        text: 'Мода'
    },
    {
        id: 27,
        img: 'https://www.youtube.com/img/explore/destinations/icons/learning_color_64.png',
        text: 'Образование'
    }
]


export const CategoriesPage: React.FC = () => {
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
                <Link key={item.id} to={`/category/${item.id}`}>
                    <CardCategory img={item.img} text={item.text} />
                </Link>
            )}
            </div>
            {loading && <LinearProgress />}
            <Divider className={classes.divider}/>
            <Typography variant="h6" className={classes.text}>Популярные видео</Typography>
            {Object.keys(videos).length && videos.map((video: any, index: number) =>
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