import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 160,
    },
});

const Pet = ({ name, photo, description , id}) => {
    const history = useHistory()
    const classes = useStyles();
    const redirectToDoggo = () => {
        history.push(`/pets/${id}`)
    }
    return (
        <Card className={classes.root} onClick={redirectToDoggo}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${photo}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default Pet