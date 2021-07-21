import { Switch, Route } from 'react-router-dom';
import Page, { PageBody, PageHeader } from '../layouts/Page';


const Portfolio = (props) => {
    const title = "Portfolio";
    const subtitle = "Time to get into the nitty gritty of what I've done professionally";
    return (
        <Page>
            <PageHeader title={title} subtitle={subtitle} />
            <PageBody>

                {
                    (props?.subpages && props.subpages.length > 0) ? (

                        <Switch>
                            <Route exact path={props.to}>
                                <h3>Please select a topic.</h3>
                            </Route>
                            {props.subpages.map(subpage =>
                                <Route key={"sub" + subpage.label} path={`${props.to}${subpage.to}`}>
                                    <PortfolioItem page={subpage.label} />
                                </Route>
                            )}
                            <Route>
                                <h2>Looks like that portfolio item hasn't been created yet</h2>
                            </Route>
                        </Switch>
                    ) : (
                        <div>
                            <h3>There are currently no portfolio items</h3>
                            <p>As this site is still being perfected, no portfolio items have been added.</p>
                            <p>Please check back frequently to see all of the awesome work I do!</p>
                        </div>
                    )
                }
            </PageBody>
        </Page>

    );
}

export default Portfolio;

function PortfolioItem(props) {
    return (<h2>You have successfully found {props.page}</h2>);
}