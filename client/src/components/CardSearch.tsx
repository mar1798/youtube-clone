import React from "react";
import {Theme, createStyles, makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar} from "@material-ui/core";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: '20px',
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
            width: '80%'
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

    const currentTime: any = new Date();
    const tookTime: any = new Date(time)
    const min = Math.floor((Math.abs(tookTime - currentTime) / 1000) / 60);
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
                        return `${month} months ago`
                    }
                } else {
                    return `${day} days ago`
                }
            } else {
                return `${hour} hours ago`
            }

        } else {
            return `${min} minutes ago`
        }
    }

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
                        subheader={takeTime()}
                    />
                    <div className={classes.controls}>
                        <Avatar aria-label="recipe">
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