import React from "react";
import {createRoot} from "react-dom/client"

const Pizza = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.description),
    ]);
};

const App = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement('h1', {}, "Padre Gino's"),
            React.createElement(Pizza, {
                name: "Malai Boti Pizza",
                description: "It is very delicious pizza made with malai boti."
            })
        ]
        
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
