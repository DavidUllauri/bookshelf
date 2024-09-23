// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from "react";
import {createRoot} from "react-dom/client";

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
const App = () => {
    return (
        <div>
            <Logo width="80" height="80"/>
            <h1>Bookshelf</h1>
            <div>
                <button onClick={() => alert("Login")}>Login</button>
            </div>
            <div>
                <button onClick={() => alert("Register")}>Register</button>
            </div>
        </div>
    )
}

// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
const domNode = document.getElementById('root');

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
const root = createRoot(domNode);

root.render(<App />)
export {root}
