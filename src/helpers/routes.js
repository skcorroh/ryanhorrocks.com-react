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
        // title: "About Me",
        // subtitle: "I'm not a narcissist but it's time to talk about me, myself, and I"
    },
    {
        to: "/resume",
        label: "Resume",
        activeOnlyWhenExact: false,
        icon: "file-text",
        page: Resume,
        title: "Resume",
        subtitle: "It sounds like resume, but it's spelt resume",
        removeBodyClass: true,
    },
    {
        to: "/portfolio",
        label: "Portfolio",
        activeOnlyWhenExact: false,
        icon: "grid",
        page: Portfolio,
        title: "Portfolio",
        subtitle: "Time to get into the nitty gritty of what I can do",
        sidebar: true,
        subpages: [
            {
                label: "Test",
                to: "/test"
            },
            {
                label: "CHI",
                to: "/chi"
            },
        ]
    },
    {
        to: "/fiddles",
        label: "Fiddles",
        activeOnlyWhenExact: false,
        icon: "file-text",
        page: Fiddles,
        title: "Fiddles",
        subtitle: "AKA Portfolio 2.0, specifically for random personal projects",
        sidebar: true
    },
    {
        to: "/contact",
        label: "Contact",
        activeOnlyWhenExact: false,
        icon: "grid",
        page: Contact,
        subtitle: "Let's get to know eachother, what say you?",
        title: "Contact",
    },
];

export default RoutesList;