import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from '../layouts/Page';

class Portfolio extends Component {
    state = {}
    render() {
        console.log('portfolio ', this.props)

        return (
            <Page {...this.props}>
                {this.props?.subpages &&
                    <Switch>
                        <Route exact path={this.props.to}>
                            <h3>Please select a topic.</h3>
                        </Route>
                        {this.props.subpages.map(subpage =>
                            <Route key={"sub" + subpage.label} path={`${this.props.to}${subpage.to}`}>
                                <PortfolioItem page={subpage.label} />
                            </Route>
                        )}
                        <Route>
                            <h2>Looks like that portfolio item hasn't been created yet</h2>
                        </Route>
                    </Switch>
                }
            </Page>
        );
    }
}

export default Portfolio;


function PortfolioItem(props) {
    return (<h2>You have successfully found {props.page}</h2>);
}