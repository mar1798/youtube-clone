import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {SearchPage} from "./pages/SeacrhPage";
import {VideoPage} from "./pages/VideoPage";


export const Routes = () => {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/video/:id" component={VideoPage} />
                    <Redirect to="/" />
                </Switch>
            </>
        )
}