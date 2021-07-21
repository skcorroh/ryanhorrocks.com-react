import "./header.css";

import NavItem from "./NavItem";

import RoutesList from "../../helpers/routes.js";

function GlobalHeader() {
    return (
        <header className="global-header uk-card uk-card-default uk-box-shadow-large">
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
                <ul className="uk-navbar-nav uk-width-1-1 uk-flex-nowrap uk-tab">
                    {
                        RoutesList.map(route => <NavItem {...route} className="uk-flex-auto" key={route.label} />)
                    }
                </ul>
            </nav>
        </header>
    );
}

export default GlobalHeader;