import { Link, useRouteMatch } from "react-router-dom";

const base_page_title = document.title;

export default function NavItem({to, label, activeOnlyWhenExact, icon, className = ""}) {

    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    if (match) {
        className += ' uk-active';
    }

    function update_title(title_label) {
        document.title = title_label + " | " + base_page_title;
    }

    return (
        <li className={className} onClick={() => { update_title(label) }}>
            {match && update_title(label)}
            <Link to={to}>{icon && <span uk-icon={icon}></span>} {label}</Link>
        </li>
    );
}