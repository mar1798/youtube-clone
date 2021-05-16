import React, {useState} from 'react'
import {Navbar} from "../components/Navbar";
import {SideBar} from "../components/Sidebar";
import {Container} from "@material-ui/core";
import {CardSearch} from "../components/CardSearch";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 200,
            marginRight: '40px',

        },
        drawerOpen: {
            marginTop: '100px',
        },
        drawerClose: {
            marginTop: '37px',
            marginLeft: '250px',
        }
    }),
);




export const SearchPage: React.FC = () => {

    const classes = useStyles()

    const [open, setOpen] = useState<boolean>(false)

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
            })} maxWidth={"lg"}
            >
                <CardSearch />
                <CardSearch />
                <CardSearch />
            </Container>

        </>
    )
}