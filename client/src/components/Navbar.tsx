import React, {SyntheticEvent, useMemo, useState} from 'react'
import {GoogleLogin} from 'react-google-login';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

import {
    Button,
    ListItemIcon,
    ListItemText,
    Tooltip,
    InputBase,
    Paper,
    AppBar,
    Divider,
    Toolbar,
    IconButton,
    Typography,
} from "@material-ui/core";
import {fade, makeStyles, Theme, createStyles} from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {StyledMenu, StyledMenuItem} from "./StyledMenu";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';




const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            position: 'relative',
            zIndex: 2,
            marginBottom: '20px',
            flexGrow: 1,
        },

        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
                letterSpacing: '1px'
            },

        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('lg')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        root: {
            marginLeft: '300px',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            width: 700,
            border: '0.5px solid #ccc',
            height: 30,
            borderRadius: 2,
            backgroundColor: theme.palette.background.default
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
            color: theme.palette.action.active
        },
        iconButtonMic: {
            padding: 10,
        },
        divider: {
            height: 30,
        },
        youtubeIcon: {
            color: "red",
        },
        tooltip: {
            padding: '10px',
            fontSize: '12px',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            opacity: 0.8
        },
        margin: {
            margin: theme.spacing(1),
            color: theme.palette.info.main,
            border: `1px solid ${theme.palette.info.main}`,
            display: 'flex',
            padding: "5px 10px",

        },
        icon_sign: {
            marginRight: 10
        },
        google: {
            position: 'absolute',
            top: 15,
            right: 33,
            height: 36,
            width: 104,
            opacity: 1,
            zIndex: 3
        },
        link: {
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center'
        },
        arrowIcon: {
            position: 'absolute',
            top: 8,
            right: 5,
            fontSize: 15,
            color: '#808080'
        },
        submenu: {
            position: 'absolute',
            top: 0,
            left: 0,
        }
    })
);

const optionsLanguage = [
    'Русский',
    'Английский'
];

const optionsCurrentTheme = [
    'Светлая',
    'Темная',
];


export const Navbar: React.FC = () => {

    const classes = useStyles();

    const {transcript} = useSpeechRecognition()

    const [language, setLanguage] = useState<string>('Русский')
    const [currentTheme, setCurrentTheme] = useState<string>('Светлая')
    const [search, setSearch] = useState<string>('')
    const [anchorElView, setAnchorElView] = useState<null | HTMLElement>(null);
    const [anchorElSettings, setAnchorElSettings] = useState<null | HTMLElement>(null);

    const [anchorCurrentTheme, setAnchorCurrentTheme] = useState<null | HTMLElement>(null);
    const [anchorLanguage, setAnchorLanguage] = useState<null | HTMLElement>(null);
    const [languageIndex, setLanguageIndex] = useState<number>(0);
    const [currentThemeIndex, setCurrentThemeIndex] = useState<number>(0);

    useMemo(()=>{
        if(currentThemeIndex === 1) {
            setCurrentTheme('Темная')
        } else {
            setCurrentTheme('Светлая')
        }
    },[currentThemeIndex])

    useMemo(()=>{
        if(languageIndex === 1) {
            setLanguage('Английский')
        } else {
            setLanguage('Русский')
        }
    },[languageIndex])



    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handleMenuCurrentThemeClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setCurrentThemeIndex(index);
        setAnchorCurrentTheme(null);
    };

    const handleMenuLanguageClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setLanguageIndex(index);
        setAnchorLanguage(null);
    };



    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(search)
    }


    const responseGoogle = (response: object) => {
        console.log(response);
    }

    useMemo(() => {
        setSearch(transcript)
    }, [transcript])


    const viewMenu = (
        <StyledMenu
            anchorEl={anchorElView}
            keepMounted
            open={Boolean(anchorElView)}
            onClose={() => setAnchorElView(null)}
        >
            <StyledMenuItem>
                <a
                    className={classes.link}
                    href="https://tv.youtube.com/welcome/?utm_servlet=prod&utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ListItemIcon>
                        <LiveTvIcon className={classes.youtubeIcon} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Youtube TV"/>
                </a>
            </StyledMenuItem>
            <Divider/>
            <StyledMenuItem>
                <a
                    className={classes.link}
                    href="https://creatoracademy.youtube.com/page/home?utm_source=YouTube&utm_medium=YT%20Main&utm_campaign=YT%20Appsn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ListItemIcon>
                        <YouTubeIcon className={classes.youtubeIcon} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Академия для авторов"/>
                </a>
            </StyledMenuItem>
            <StyledMenuItem>
                <a
                    className={classes.link}
                    href="https://artists.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ListItemIcon>
                        <YouTubeIcon className={classes.youtubeIcon} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Академия для музыкантов"/>
                </a>
            </StyledMenuItem>
        </StyledMenu>
    );


    const settingsMenu = (
        <StyledMenu
            anchorEl={anchorElSettings}
            keepMounted
            open={Boolean(anchorElSettings)}
            onClose={() => setAnchorElSettings(null)}
        >
            <StyledMenuItem onClick={(event: React.MouseEvent<HTMLElement>)=>setAnchorCurrentTheme(event.currentTarget)}>
                <ListItemIcon>
                    <Brightness4Icon fontSize="small"/>
                </ListItemIcon>
                <Typography>Тема: {currentTheme}</Typography>
                <ArrowForwardIosIcon className={classes.arrowIcon}  />
            </StyledMenuItem>
            <StyledMenu
                anchorEl={anchorCurrentTheme}
                keepMounted
                open={Boolean(anchorCurrentTheme)}
                onClose={()=>setAnchorCurrentTheme(null)}
                className={classes.submenu}
            >
                {optionsCurrentTheme.map((option, index) => (
                    <StyledMenuItem
                        key={option}
                        selected={index === currentThemeIndex}
                        onClick={(event: React.MouseEvent<HTMLElement>) => handleMenuCurrentThemeClick(event, index)}
                    >
                        {option}
                    </StyledMenuItem>
                ))}
            </StyledMenu>
            <StyledMenuItem onClick={(event: React.MouseEvent<HTMLElement>)=>setAnchorLanguage(event.currentTarget)}>
                <ListItemIcon>
                    <TranslateIcon fontSize="small"/>
                </ListItemIcon>
                <Typography>Язык: {language}</Typography>
                <ArrowForwardIosIcon className={classes.arrowIcon}  />
            </StyledMenuItem>
            <StyledMenu
                anchorEl={anchorLanguage}
                keepMounted
                open={Boolean(anchorLanguage)}
                onClose={()=>setAnchorLanguage(null)}
            >
                {optionsLanguage.map((option, index) => (
                    <StyledMenuItem
                        key={option}
                        selected={index === languageIndex}
                        onClick={(event: React.MouseEvent<HTMLElement>) => handleMenuLanguageClick(event, index)}
                    >
                        {option}
                    </StyledMenuItem>
                ))}
            </StyledMenu>
        </StyledMenu>
    )


    return (
        <div className={classes.grow}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <YouTubeIcon fontSize="large" className={classes.youtubeIcon}/>
                    <Typography className={classes.title} variant="h6" noWrap>
                        YouTube
                    </Typography>
                    <Paper elevation={0} component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Введите запрос"
                            inputProps={{'aria-label': 'Search field'}}
                            onChange={changeHandler}
                            value={search}

                        />
                        <IconButton className={classes.iconButton} aria-label="keyboard">
                            <KeyboardIcon/>
                        </IconButton>
                        <Divider className={classes.divider} orientation="vertical"/>
                        <Tooltip
                            title={<span className={classes.tooltip}>Введите запрос</span>}
                            aria-label="search"
                        >
                            <IconButton
                                className={classes.iconButton}
                                onClick={submitHandler}
                                aria-label="search"
                                type="submit">
                                <SearchIcon/>
                            </IconButton>
                        </Tooltip>

                    </Paper>
                    <Tooltip
                        title={<span className={classes.tooltip}>Голосовой поиск</span>}
                        aria-label="mic">
                        <IconButton
                            onClick={() => SpeechRecognition.startListening()}
                            className={classes.iconButtonMic}
                            aria-label="mic"
                        >
                            <MicIcon/>
                        </IconButton>
                    </Tooltip>

                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <Tooltip
                            title={<span className={classes.tooltip}>Приложения Youtube</span>}
                            aria-label="view"
                        >
                            <IconButton
                                aria-label="view"
                                onClick={(e: React.MouseEvent<HTMLElement>) => (setAnchorElView(e.currentTarget))}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <ViewModuleIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            title={<span className={classes.tooltip}>Настройки</span>}
                            aria-label="settings"
                        >
                            <IconButton
                                aria-label="settings"
                                aria-haspopup="true"
                                onClick={(e: React.MouseEvent<HTMLElement>) => (setAnchorElSettings(e.currentTarget))}
                                color="inherit"
                            >
                                <MoreVertIcon/>
                            </IconButton>
                        </Tooltip>

                        <GoogleLogin
                            clientId="840988478759-ama8je42nbhvvc44a4uvq1e4gr1urbqa.apps.googleusercontent.com"
                            buttonText="Login"
                            render={renderProps => (
                                <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="outlined"
                                        size="medium" className={classes.margin}>
                                    <AccountCircle className={classes.icon_sign}/>
                                    <span>Войти</span>
                                </Button>
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className={classes.google}
                        />


                    </div>
                </Toolbar>
            </AppBar>

            {viewMenu}
            {settingsMenu}

        </div>
    );
}