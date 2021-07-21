import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Page, { PageBody, PageHeader } from '../layouts/Page';


const Fiddles = (props) => {
    const title = "Fiddles";
    const subtitle = "AKA Portfolio 2.0, specifically for random personal projects";
    return (
        <Page>
            <PageHeader title={title} subtitle={subtitle} />
            <PageBody>

                {
                    (props?.subpages && props.subpages.length > 0) ? (

                        <Switch>
                            <Route exact path={props.to}>
                                <h3>Choose a fiddle, any fiddle.</h3>
                            </Route>
                            {props.subpages.map(subpage =>
                                <Route key={"sub" + subpage.label} path={`${props.to}${subpage.to}`}>
                                    <Fiddle fiddle={subpage.label} />
                                </Route>
                            )}
                            <Route>
                                <h2>Looks like that portfolio item hasn't been created yet</h2>
                            </Route>
                        </Switch>
                    ) : (
                        <div>
                            <h3>There are currently no Fiddles</h3>
                            <p>Since this site is brand new I haven't had a chance to port all of my fiddles over.</p>
                            <p>In the meantime, feel free to check out my <a href="//jsfiddle.net/user/Skcorroh/" target="_blank" rel="noreferrer">jsfiddle account</a></p>
                        </div>
                    )
                }
            </PageBody>
        </Page>

    );
}

export default Fiddles;


function Fiddle(props) {
    return (<h2>{props.fiddle} is a fiddle! </h2>);
}