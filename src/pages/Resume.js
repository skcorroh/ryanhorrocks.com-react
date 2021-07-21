import React, { Component } from 'react';

import ResumeEmbed from "../components/ResumeEmbed/ResumeEmbed";
import Page from '../layouts/Page';


class Resume extends Component {
    state = {}
    render() {
        return (
            <Page {...this.props}>
                <ResumeEmbed url="https://ryanhorrocks.com/new_site/Ryan_Horrocks_Resume.pdf" />
            </Page>
        );
    }
}

export default Resume;