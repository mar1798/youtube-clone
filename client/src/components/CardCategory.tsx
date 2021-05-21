import React from "react";
import {Paper, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//
// 10 : Music
// 20: gaming
// 25: news
// 26: moda
// 27: Education
// 17: sport



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            marginTop: 20,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.paper,
            width: '100%',
            height: 120,
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        },
        text: {
            marginTop: 10,
            color: theme.palette.text.primary
        }
    }),
);

interface IProps {
    img: string,
    text: string
}


export const CardCategory:React.FC<IProps> = ({text, img}) => {

    const classes = useStyles()

    return (
        <Paper className={classes.paper}>
            <img src={img} width='32' height='32'/>
            <Typography variant="h5" className={classes.text}>{text}</Typography>
        </Paper>

    )
}