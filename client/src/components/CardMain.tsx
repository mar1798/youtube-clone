import React from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import {Card, CardHeader, CardMedia, CardContent, Avatar, Typography} from "@material-ui/core";
import {useTime} from "../hooks/useTime";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 20,
            backgroundColor: theme.palette.background.default,
            '&.MuiPaper-elevation1': {
                boxShadow: 'none'
            }
        },
        media: {
            height: 0,
            paddingTop: "56.25%" // 16:9
        },
        headText: {
            color: theme.palette.text.primary,
            fontSize: 20,
            height: 60,
            overflow: 'hidden',
        }
    })
);

interface ICardMain {
    channelTitle: string,
    description: string,
    time: string,
    img: string,
    avatar: string
}


export const CardMain: React.FC<ICardMain> = ({channelTitle, description, time, img, avatar}) => {

    const classes = useStyles();
    const {takeTime} = useTime()


    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={img}
            />
            <CardContent>
                <Typography className={classes.headText} component="p">
                    {description}
                </Typography>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" >
                            <img
                                src={avatar}
                                width='50' height="50" alt=""/>
                        </Avatar>
                    }
                    title={channelTitle}
                    subheader={takeTime(time)}
                />
            </CardContent>
        </Card>
    );
}