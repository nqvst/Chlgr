import React, { Component } from 'react';
import { withTheme } from 'material-ui/styles'
import { Button } from 'material-ui';
import CreateChallenge from '../components/CreateChallenge.js';


class Home extends Component {
    render() {
        return (
            <div>
                <Button color="primary">Primary</Button>
                <Button color="accent">Accent</Button>
                <CreateChallenge />
            </div>
        );
    }
}

export default withTheme()(Home);
//export default Home;
