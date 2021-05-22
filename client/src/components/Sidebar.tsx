import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import clsx from 'clsx';
import {Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import RestoreIcon from '@material-ui/icons/Restore';
import MenuIcon from "@material-ui/icons/Menu";
import {useTranslation} from "react-i18next";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
        },
        drawerOpen: {
            width: 240,
            marginTop: 63,
            border: 'none',
        },
        drawerClose: {
            marginTop: 63,
            width: theme.spacing(7) + 1,
            border: 'none',
        },
        listItem: {
            cursor: 'pointer',
            "&:hover" : {
                backgroundColor: '#bbb'
            }
        },
        menuButton: {
            position: 'fixed',
            top: 8,
            left: 16,
            zIndex:3,
        },
        active: {
            color: 'red'
        }
    }),
);


export const SideBar: React.FC = () => {


    const history = useHistory();
    const classes = useStyles();
    const [open,setOpen] = useState<boolean>(false)
    const {t} = useTranslation()

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
                        <ListItemIcon >
                            <HomeIcon className={clsx({[classes.active]: history.location.pathname === '/' })}/>
                        </ListItemIcon>
                        <ListItemText primary={t('home')}/>
                    </ListItem>
                    <ListItem onClick={()=>history.push('/categories')} className={classes.listItem}>
                        <ListItemIcon>
                            <ExploreIcon className={clsx({[classes.active]: history.location.pathname === '/categories' && '/category/:id' })}/>
                        </ListItemIcon>
                        <ListItemText primary={t('explore')}/>
                    </ListItem>

                    <ListItem onClick={()=>history.push('/history')} className={classes.listItem}>
                        <ListItemIcon>
                            <RestoreIcon className={clsx({[classes.active]: history.location.pathname === '/history' })}/>
                        </ListItemIcon>
                        <ListItemText primary={t('history')}/>
                    </ListItem>


                </List>
            </Drawer>
        </>
    )
}