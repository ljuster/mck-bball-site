import React from 'react';
import ReactDOM from 'react-dom';
import Roster from '../components/Roster.jsx';

// lk
document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById("root")
    const data = JSON.parse(node.getAttribute("data"))
    ReactDOM.render(<Roster />, document.getElementById("root"));
}
)