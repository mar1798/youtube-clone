import React from 'react';
import clsx from 'clsx';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import RestoreIcon from '@material-ui/icons/Restore';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginTop: 63,
            paddingLeft:8,
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
                marginTop: 63,
                paddingLeft:8,
            },
        },
    }),
);


export const SideBar: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);


    return (
            <Drawer
                onClick={() => setOpen(!open)}
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >

                <List>
                    <ListItem>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary={'Главная'}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ExploreIcon/></ListItemIcon>
                        <ListItemText primary={'Навигатор'}/>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon><RestoreIcon/></ListItemIcon>
                        <ListItemText primary={'История'}/>
                    </ListItem>


                </List>
            </Drawer>
    )
}