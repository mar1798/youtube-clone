import React from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import {Card , CardHeader, CardMedia, CardContent, Avatar, Typography } from "@material-ui/core";
import {red} from "@material-ui/core/colors";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            margin: '10px',
            backgroundColor: theme.palette.background.default,
            '&.MuiPaper-elevation1':{
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


export const CardMain:React.FC = () => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                title="Paella dish"
            />
            <CardContent>
                <Typography className={classes.headText} component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Typography>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                                 width='50' height="50" alt=""/>
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14 &bull; 2016"
                />
            </CardContent>
        </Card>
    );
}