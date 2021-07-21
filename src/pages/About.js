import Page, { PageHeader, PageBody } from '../layouts/Page';

const About = (props) => {
    const title = "About Me";
    const subtitle = "I'm not a narcissist but it's time to talk about me, myself, and I";
    return (
        <Page>
            <PageHeader title={title} subtitle={subtitle} />
            <PageBody>
                <p>Hello, World! I'm Ryan!</p>
                <p>I code things</p>
                <p>And do other stuff</p>
                <p>This site is still under maintenance, so new content will be added here shortly</p>
            </PageBody>
        </Page>
    );
}

export default About;