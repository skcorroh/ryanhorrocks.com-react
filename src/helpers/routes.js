import About from "../pages/About";
import Contact from "../pages/Contact";
import Fiddles from "../pages/Fiddles";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

const RoutesList = [
    {
        to: "/",
        label: "About",
        activeOnlyWhenExact: true,
        icon: "user",
        page: About,
    },
    {
        to: "/resume",
        label: "Resume",
        icon: "file-text",
        page: Resume,
    },
    {
        to: "/portfolio",
        label: "Portfolio",
        icon: "code",
        page: Portfolio,
        subpages: [
            // {
            //     label: "Test",
            //     to: "/test"
            // },
            // {
            //     label: "CHI",
            //     to: "/chi"
            // },
        ]
    },
    {
        to: "/fiddles",
        label: "Fiddles",
        icon: "git-branch",
        page: Fiddles,
        subpages: [
            // {
            //     label: "Test",
            //     to: "/test"
            // },
            // {
            //     label: "CHI",
            //     to: "/chi"
            // },
        ]
    },
    {
        to: "/contact",
        label: "Contact",
        icon: "comments",
        page: Contact,
    },
];

export default RoutesList;