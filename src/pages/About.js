import Page from '../layouts/Page';

export default function About (props) {
    const newprops = Object.assign({
        title: "About Me",
        subtitle: "I'm not a narcissist but it's time to talk about me, myself, and I"
    }, props)
    return (
        <Page {...newprops}>
            <p>I'm Ryan. TEST</p>
            <p>I code things</p>
            <p>And stuff</p>
        </Page>
    );
}