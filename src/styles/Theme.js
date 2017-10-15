import { createMuiTheme } from 'material-ui/styles';
import { green, red, deepPurple } from 'material-ui/colors';

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: green,
    },
});

export default theme;