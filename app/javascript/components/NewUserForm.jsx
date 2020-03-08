import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function NewUserForm(props){
    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);

    const classes = useStyles();

    const handleChange = (e) => {
        if (e.target.id === "email"){
            setEmail(e.target.value)
        } else {
            setName(e.target.value)
        }
    }

    return (
        <Container>
        <Paper elevation={3}>
        <form className={classes.root} noValidate autoComplete="off">
            <div><TextField id="name" label="name" onChange={e => handleChange(e)} /></div>
            <div><TextField id="email" abel="email" variant="filled" onChange={e => handleChange(e)} /></div>
                    <Button variant="contained" color="primary" onClick={event => props.handleSubmit(event)}>Submit</Button>
        </form>
        </Paper>
        </Container>
    );
}