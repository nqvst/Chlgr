import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';



const styles = theme => ({
    card: {
        minWidth: 275,
        marginBottom: '16px',
    },
    avatar: {
        margin: 10,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    actions: {
        flex:1,
        justifyContent: 'flex-end',
    }
});


function Challenge(props){

    const {
        classes,
        endDate,
        category,
        description,
        heading,
        createdBy
    } = props;

    let endDateString = ''
    if (endDate){
        endDateString = new Date(endDate).toString().substr(4, 11);
    } else {
        endDateString = 'none';
    }

    return(
        <Card className={classes.card}>
            <CardContent>
                { createdBy.image ?
                    <Avatar className={classes.avatar} src={createdBy.image} alt={createdBy}/> :
                    <Avatar className={classes.avatar}>{createdBy[0]}</Avatar>
                }
                <Typography type="headline" component="h2">
                {heading}
                </Typography>
                <Typography type="body1" className={classes.title}>
                    {description}
                    <p>
                        {endDateString}
                    </p>
                </Typography>

            </CardContent>
            <CardActions className={classes.actions}>
                <Button color="primary">
                    Accept
                </Button>
        </CardActions>
        </Card>
    );
}

export default withStyles(styles)(Challenge);
