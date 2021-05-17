import React from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import {Card, CardHeader, CardMedia, CardContent, Avatar, Typography} from "@material-ui/core";
import {red} from "@material-ui/core/colors";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            margin: '20px',
            backgroundColor: theme.palette.background.default,
            '&.MuiPaper-elevation1': {
                boxShadow: 'none'
            }
        },
        media: {
            height: 0,
            paddingTop: "56.25%" // 16:9
        },
        avatar: {
            backgroundColor: red[500]
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
    title: string,
    description: string,
    time: string,
    img: string,
    avatar: string
}


export const CardMain: React.FC<ICardMain> = ({title, description, time, img, avatar}) => {

    const classes = useStyles();
    const currentTime: any = new Date();
    const alo: any = new Date(time)
    const min = Math.floor((Math.abs(alo - currentTime) / 1000) / 60);
    const takeTime = (): string => {
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
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img
                                src={avatar}
                                width='50' height="50" alt=""/>
                        </Avatar>
                    }
                    title={title}
                    subheader={takeTime()}
                />
            </CardContent>
        </Card>
    );
}