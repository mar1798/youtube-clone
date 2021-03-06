import React from "react";
import {Theme, createStyles, makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar} from "@material-ui/core";
import {useTime} from "../hooks/useTime";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            backgroundColor: theme.palette.background.default,
            '&.MuiPaper-elevation1':{
                boxShadow: 'none',
            },
            '& .MuiCardHeader-root': {
                padding: 0,
            },
            maxHeight: 200,
            height: '100%',
            marginBottom: 20,
        },
        details: {
            display: "flex",
            flexDirection: "column",
            marginLeft: '10px'
        },
        content: {
            height: '100%',
        },
        cover: {
            maxWidth: '360px',
            width: '100%',
            flexShrink: 0,

        },
        controls: {
            display: "flex",
            alignItems: "center",
            paddingBottom: theme.spacing(1),
        },
        description: {
            width: '700px'
        },
        avatar: {
            marginRight: '10px'
        }
    })
);

interface ICardSeacrh {
    img: string,
    avatar: string,
    time: string,
    description: string,
    title: string,
    channelTitle: string
}

export const CardSearch: React.FC<ICardSeacrh> = ({img, avatar, time, description, title, channelTitle}) => {

    const classes = useStyles()
    const {takeTime} = useTime()


    return (

        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={img}
                title={title}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <CardHeader
                        title={channelTitle}
                        subheader={takeTime(time)}
                    />
                    <div className={classes.controls}>
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img
                                src={avatar}
                                width='50' height="50" alt=""/>
                        </Avatar>
                        <Typography variant="body2" color="textSecondary" component="span">
                            {channelTitle}
                        </Typography>
                    </div>
                    <Typography variant="body2" noWrap={true} className={classes.description} color="textSecondary"  component="p">
                        {description}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}