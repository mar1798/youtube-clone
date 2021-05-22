import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {SearchPage} from "./pages/SeacrhPage";
import {VideoPage} from "./pages/VideoPage";
import {Navbar} from "./components/Navbar";
import {SideBar} from "./components/Sidebar";
import {CategoriesPage} from "./pages/CategoriesPage";
import {CategoryPage} from "./pages/CategoryPage";
import {HistoryPage} from "./pages/HistoryPage";


export const Routes = () => {
        return (
            <>
                <Navbar />
                <SideBar/>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/search/:id" component={SearchPage} />
                    <Route path="/video/:id" component={VideoPage} />
                    <Route path="/categories" component={CategoriesPage}/>
                    <Route path="/category/:id/:name" component={CategoryPage}/>
                    <Route path="/history" component={HistoryPage}/>
                    <Redirect to="/" />
                </Switch>
            </>
        )
}