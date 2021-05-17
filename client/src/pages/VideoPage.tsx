import React, {useState} from 'react'
import {Navbar} from "../components/Navbar";
import {SideBar} from "../components/Sidebar";
import clsx from "clsx";
import {Button, Container, Divider} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Avatar, Badge} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: 100,

        },
        drawerOpen: {
            marginTop: '100px',
            maxWidth: 1350,
            transition: theme.transitions.create('margin, max-width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            marginTop: '37px',

            maxWidth: 1500,
            transition: theme.transitions.create('margin, max-width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        cardRoot: {
            width: '80%',
            marginBottom: '40px',
            backgroundColor: theme.palette.background.default,
            '&.MuiPaper-elevation1': {
                boxShadow: 'none',
            },
        },
        media: {
            height: '600px'
        },
        subHead: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .MuiBadge-anchorOriginTopRightRectangle' : {
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
        badge: {
            backgroundColor: '#606060'
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
    const classes = useStyles()
    const [open, setOpen] = useState<boolean>(false)
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleExpandOpen = () => {
        setExpanded(true);
    };

    const handleExpandClose = () => {
        setExpanded(false);
    };


    const onSideBarOpen = (open: boolean) => {
        setOpen(open)
    }


    return (
        <>
            <Navbar onSideBarOpen={onSideBarOpen}/>
            <SideBar open={open}/>

            <Container className={clsx(classes.root, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })} maxWidth={false}
            >
                <Card className={classes.cardRoot}>
                    <CardMedia
                        component="img"
                        height="100%"
                        className={classes.media}
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="h5" className={classes.headText} component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                        <div className={classes.subHead}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                September 14 &bull; 2016
                            </Typography>

                            <div>
                                <IconButton aria-label="add to favorites">
                                    <Badge badgeContent={4}>
                                        <ThumbUpAltIcon/>
                                    </Badge>

                                </IconButton>
                                <IconButton aria-label="share">
                                    <Badge badgeContent={4}>
                                        <ThumbDownIcon/>
                                    </Badge>
                                </IconButton>
                            </div>
                        </div>
                    </CardContent>
                    <Divider/>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />

                    <CardActions disableSpacing>
                        {!expanded &&
                        <Button className={classes.expand}
                                onClick={handleExpandOpen}
                                aria-expanded={expanded}
                                aria-label="show more" size="small"
                        >
                            <span>Eще</span>
                        </Button>
                        }
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                            <Button className={classes.expandClose}
                                    onClick={handleExpandClose}
                                    aria-expanded={expanded}
                                    aria-label="show more" size="small"
                            >
                                Cвернуть
                            </Button>
                        </CardContent>
                    </Collapse>
                </Card>
            </Container>
        </>
    )
}