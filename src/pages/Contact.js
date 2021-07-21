import Page, { PageBody, PageHeader } from '../layouts/Page';

const Contact = () => {
    const page_info = {
        title: "Contact",
        subtitle: "Let's get to know eachother, what say you?"
    }
    return (
        <Page>
            <PageHeader {...page_info} />
            <PageBody>
                <p>Hello! I would love to hear from you, please feel free to reach out in any of the following ways</p>
                <p>You can text or give me a call at <a href="tel:8015483563">(801) 548-3563</a></p>
                <p>Email also works! <a href="mailto:admin@ryanhorrocks.com">admin@ryanhorrocks.com</a> is definitely a good one to use</p>
                <p>It may be a little unorthodox, but I guess you could follow me on <a href="https://github.com/skcorroh" target="_blank" rel="noreferrer">GitHub</a> and comment on something?</p>
                <p>Oh! I know. You could also message me on <a href="https://www.linkedin.com/in/ryanlhorrocks/" target="_blank" rel="noreferrer">LinkedIn</a>!</p>
                <p>I'm sure there's another way you can reach out, if I think of it I'll add it to this list. If <em>none</em> of these options work for you... hopefully we run into eachother!</p>

            </PageBody>
        </Page>
    );
}

export default Contact;