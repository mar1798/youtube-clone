import React from 'react';
import {useHistory} from 'react-router-dom'
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
            marginTop: 63,

        },
        drawerOpen: {
            width: drawerWidth,

            marginTop: 63,
            paddingLeft:8,
            border: 'none'
        },
        drawerClose: {
            overflowX: 'hidden',
            marginTop: 63,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
                marginTop: 63,
                paddingLeft:8,
                border: 'none'
            },
        },
        listItem: {
            cursor: 'pointer'
        }
    }),
);

interface SidebarProps {
    open: boolean
}

export const SideBar: React.FC<SidebarProps> = ({open}) => {


    const history = useHistory();
    const classes = useStyles();


    return (
            <Drawer
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
                    <ListItem onClick={()=>history.push('/')} className={classes.listItem}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Главная'}/>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon><ExploreIcon/></ListItemIcon>
                        <ListItemText primary={'Навигатор'}/>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemIcon><RestoreIcon/></ListItemIcon>
                        <ListItemText primary={'История'}/>
                    </ListItem>


                </List>
            </Drawer>
    )
}