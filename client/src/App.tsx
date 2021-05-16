import React, { useMemo } from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {Routes} from "./routes";


function App() {

    const {theme} = useTypedSelector(state => state.auth)

    const mainTheme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: theme ? 'light' : 'dark',
                },
            }),
        [theme],
    );


    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline/>
            <Routes />


        </ThemeProvider>
    );
}

export default App;