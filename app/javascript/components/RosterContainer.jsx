import React from 'react';
import axios from 'axios';
import { Button, Box } from '@material-ui/core';
import Roster from "./Roster.jsx"
import NewUserForm from "./NewUserForm.jsx"



export default function RosterContainer(props) {
    const [createNewUser, setCreateNewUser] = React.useState(false);
    const [errors, setErrors] = React.useState(null);
    const [successMessage, setSuccessMessage] = React.useState(null);

    const handleClick = (event) => {
        setCreateNewUser(true)
    };

    const handleSubmit = (event) => {
        axios.post(`/api/users`, {
            email: email,
            name: name
        })
            .then(function (response) {
                debugger
                setSuccessMessage(response.data);
                setCreateNewUser(false);
            })
            .catch(function (error) {
                debugger
                setErrors(error.data)
                setCreateNewUser(false);
            });
    };

    return (
        <Box>
            <Button variant="contained" color="primary" onClick={event => handleClick(event)}>Add User</Button>
            {createNewUser && <NewUserForm handleSubmit={handleSubmit} />}
            {errors && <p>{errors}</p>}
            {successMessage && <p>{successMessage}</p>}
            <Roster users={props.users} />
        </Box>
    );
}