import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "../LandingPage";
import CreateAccount from "../CreateAccount";
import Dashboard from "../Dashboard";
import AccountSettings from "../AccountSettings";

const routesArr = [
    {
        component: LandingPage,
        path:"/",
        exact: true
    },
    {
        component: CreateAccount,
        path:"/create-account",
        exact: true
    },
    {
        component: Dashboard,
        path:"/dashboard",
        exact: false
    },
    {
        component: AccountSettings,
        path:"/dashboard/settings",
        exact: true
    }
];

export default class AppRouter extends React.Component {
    render() {
        return (
        <Router>
            <div>
            {
                routesArr.map(function(r) {
                    return <Route path={r.path} component={r.component} exact={r.exact}/>
                })
            }
            </div>
        </Router>
        )
    }
}