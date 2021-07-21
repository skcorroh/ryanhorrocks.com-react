import React, { Component } from 'react';

import Page from '../layouts/Page';

class Fiddles extends Component {
    state = {}
    render() {
        console.log('Fiddles ', this.props)
        return (
            <Page {...this.props}>
                <p>I have no idea what to do here</p>
            </Page>
        );
    }
}

export default Fiddles;