import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MainPage} from "./pages/MainPage";


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');


    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <MainPage/>


        </ThemeProvider>
    );
}

export default App;