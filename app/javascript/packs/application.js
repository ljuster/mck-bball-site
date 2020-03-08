import React from 'react';
import ReactDOM from 'react-dom';
import RosterContainer from '../components/RosterContainer.jsx';

// lk
document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById("root")
    const data = JSON.parse(node.getAttribute("data"))
    ReactDOM.render(<RosterContainer users={data} />, document.getElementById("root"));
}
)