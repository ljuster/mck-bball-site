import React from 'react';
import axios from 'axios';
import { Button, Box } from '@material-ui/core';
import Roster from "./Roster.jsx"
import NewUserForm from "./NewUserForm.jsx"



export default function RosterContainer(props) {
    const [showCreateUserForm, setShowCreateUserForm] = React.useState(false);
    const [users, setUsers] = React.useState(props.users);

    const handleClick = (event) => {
        setShowCreateUserForm(true)
    };

    return (
        <Box>
            <Button variant="contained" color="primary" onClick={event => handleClick(event)}>Add User</Button>
            {showCreateUserForm && <NewUserForm setUsers={setUsers} />}
            <Roster users={users} />
        </Box>
    );
}