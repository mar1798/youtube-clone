import React from "react";
import {Theme, createStyles, makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar} from "@material-ui/core";
import {red} from "@material-ui/core/colors";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            width: '80%',
            backgroundColor: theme.palette.background.default,
            '&.MuiPaper-elevation1':{
                boxShadow: 'none',
            },
            '& .MuiCardHeader-root': {
                padding: 0,
            },
            height: 200,
            marginBottom: 20
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
            minWidth: 360
        },
        controls: {
            display: "flex",
            alignItems: "center",
            paddingBottom: theme.spacing(1)
        },
        playIcon: {
            height: 38,
            width: 38
        },
        avatar: {
            backgroundColor: red[500],
            marginRight: 10,
        },
    })
);

export const CardSearch: React.FC = () => {

    const classes = useStyles()

    return (

        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14 &bull; 2016"
                    />
                    <div className={classes.controls}>
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                        <Typography variant="body2" color="textSecondary" component="span">
                            Анвар
                        </Typography>
                    </div>
                    <Typography variant="body2" noWrap={true} display={"inline"} color="textSecondary"  component="p">
                        This impressive paella is a perfect party dish and a fun meal to
                        cook together with your guests. Add 1 cup of frozen peas along with
                        the mussels, if you like.
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}