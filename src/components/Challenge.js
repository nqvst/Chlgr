import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import toArray from '../util/toArray.js';
import { Link } from 'react-router-dom'



const styles = theme => ({
    card: {
        minWidth: 275,
        marginBottom: '16px',
    },
    cardContent: {
        padding: 0,
        
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
    },
    category: {
        backgroundColor: '#74ccb4',
        colro: 'white',
        width: '5rem',
        marginTop: '1rem',
        textAlign: 'center',

    }
});


function Challenge(props){

    console.log(props);

    const {
        classes,
        endDate,
        category,
        description,
        heading,
        createdBy, 
        onClick,
        acceptedBy,
        user,
        id,
    } = props;


    console.log(user);

    let accepted = false;
    if (user) {
        accepted = toArray(acceptedBy).find((accepted) => {
            console.log(accepted);
            console.log(user);
            if(accepted.value.userId === user.userId){
                return true;
            }else {
                return false;
            }
        })
    }

    let endDateString = ''
    if (endDate){
        endDateString = new Date(endDate).toString().substr(4, 11);
    } else {
        endDateString = 'none';
    }

    return(
        <Link to={`/c/${id}`}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <div className={classes.category}>
                        {category}
                    </div>
                    { createdBy.image ?
                        <Avatar className={classes.avatar} src={createdBy.image} alt={createdBy}/> :
                        <Avatar className={classes.avatar}>{createdBy[0]}</Avatar>
                    }
                    <Typography type="headline" component="h2">
                    {heading}
                    </Typography>
                    {category}
                    <Typography type="body1" className={classes.title}>
                        {description}
                    </Typography>

                </CardContent>
                <CardActions className={classes.actions}>
                    <p>
                        end date: {endDateString}
                    </p>
                    <p>
                        acceptedBy: {toArray(acceptedBy).length}
                    </p>
                    {!accepted && user &&
                        <Button color="primary" onClick={onClick}> Accept</Button>
                    }
                    {accepted && user &&
                        <p>Accepted</p>
                    }
            </CardActions>
            </Card>
        </Link>
    );
}

export default withStyles(styles)(Challenge);
