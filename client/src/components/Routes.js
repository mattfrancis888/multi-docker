import React from "react";
import { Route, Switch } from "react-router-dom";
import Body from "./Body";
import NotFound from "./NotFound";
const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Body} />
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
