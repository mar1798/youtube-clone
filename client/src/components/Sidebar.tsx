import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import clsx from 'clsx';
import {Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import RestoreIcon from '@material-ui/icons/Restore';
import MenuIcon from "@material-ui/icons/Menu";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {

        },
        drawerOpen: {
            width: 240,
            marginTop: 63,
            paddingLeft:8,
            border: 'none'
        },
        drawerClose: {
            marginTop: 63,
            width: theme.spacing(9) + 1,
            border: 'none',
            paddingLeft:8,
        },
        listItem: {
            cursor: 'pointer'
        },
        menuButton: {
            position: 'fixed',
            top: 8,
            left: 23,
            zIndex:3,
        },
    }),
);


export const SideBar: React.FC = () => {


    const history = useHistory();
    const classes = useStyles();
    const [open,setOpen] = useState<boolean>(false)



    return (
        <>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={()=>setOpen(!open)}
            >
                <MenuIcon/>
            </IconButton>
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
                    <ListItem onClick={()=>history.push('/categories')} className={classes.listItem}>
                        <ListItemIcon><ExploreIcon/></ListItemIcon>
                        <ListItemText primary={'Навигатор'}/>
                    </ListItem>

                    <ListItem onClick={()=>history.push('/history')} className={classes.listItem}>
                        <ListItemIcon><RestoreIcon/></ListItemIcon>
                        <ListItemText primary={'История'}/>
                    </ListItem>


                </List>
            </Drawer>
        </>
    )
}