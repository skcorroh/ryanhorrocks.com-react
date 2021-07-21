import React, { Component } from 'react';

import Page from '../layouts/Page';

class Contact extends Component {
    state = {}
    render() {
        console.log('Contact ', this.props)
        return (
            <Page {...this.props}>
                <p>Contact Page Content goes here</p>
            </Page>
        );
    }
}

export default Contact;