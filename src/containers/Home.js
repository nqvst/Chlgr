import React, { Component } from 'react';
import { withTheme } from 'material-ui/styles'
import { Button } from 'material-ui';


class Home extends Component {
    render() {
        return (
            <div>
                <Button color="primary">Primary</Button>
                <Button color="accent">Accent</Button>
            </div>
        );
    }
}

export default withTheme()(Home);
//export default Home;
