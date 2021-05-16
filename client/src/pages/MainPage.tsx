import React, {useState} from "react";
import {Navbar} from "../components/Navbar";
import {SideBar} from "../components/Sidebar";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CardMain} from "../components/CardMain";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import clsx from "clsx";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'grid',
            gridGap: '20px',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',

        },
        drawerOpen: {
            marginTop: '100px',
            maxWidth: 1350,
            marginLeft: '280px',
            transition: theme.transitions.create('margin, max-width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            marginTop: '37px',
            marginLeft: '100px',
            maxWidth: 1500,
            transition: theme.transitions.create('margin, max-width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    }),
);



export const MainPage: React.FC = () => {
    const classes = useStyles()
    const [open, setOpen] = useState<boolean>(false)

    const onSideBarOpen = (open: boolean) => {
        setOpen(open)
    }

    const auth = useTypedSelector(state => state.auth)
    console.log(auth)

    return (
        <>
            <Navbar onSideBarOpen={onSideBarOpen}/>
            <SideBar open={open}/>

            <Container className={clsx(classes.root, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })} maxWidth={false}
            >
                <CardMain/>
                <CardMain/>
                <CardMain/>
                <CardMain/>
            </Container>



        </>

    )
}