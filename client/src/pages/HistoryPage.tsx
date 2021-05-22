import React, {useEffect, useMemo} from "react";
import {Button, Container, Typography} from "@material-ui/core";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import RestoreIcon from '@material-ui/icons/Restore';
import {GoogleLogin} from "react-google-login";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        noAuth: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '90vh'
        },
        text: {
            color: theme.palette.text.primary,
            margin: 5,
        },
        icon: {
            fontSize: 100,
            color: "#aaa"
        },
        margin: {
            margin: theme.spacing(1),
            height: 50,
            width: 150,
            color: theme.palette.info.main,
            border: `1px solid ${theme.palette.info.main}`,
            display: 'flex',
            padding: "5px 10px",

        },
        icon_sign: {
            marginRight: 10
        },
    }),
);



export const HistoryPage: React.FC = () => {
    const {token} = useTypedSelector(state => state.auth)
    const classes = useStyles()

    const responseGoogle = (response: any) => {
        console.log(response.tokenId);
    }
    const {t} = useTranslation();

    if (!token) {
        return (
            <Container maxWidth="lg" className={classes.noAuth}>
                <RestoreIcon className={classes.icon}/>
                <Typography variant="h4" className={classes.text}>{t('history_title')}</Typography>
                <Typography variant="h6" className={classes.text}>{t('history_sub-title')}</Typography>
                <GoogleLogin
                    clientId="840988478759-ama8je42nbhvvc44a4uvq1e4gr1urbqa.apps.googleusercontent.com"
                    buttonText="Login"
                    render={renderProps => (
                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="outlined"
                                size="medium" className={classes.margin} >
                            <AccountCircle  className={classes.icon_sign}/>
                            <span>{t('login')}</span>
                        </Button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}

                />
            </Container>
        )
    }

    return (
        <Container maxWidth="lg">
            <h1>History page</h1>
        </Container>
    )
}