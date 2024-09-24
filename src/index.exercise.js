import * as React from "react";
import {createRoot} from "react-dom/client";
import {Logo} from './components/logo'
import {Dialog} from "@reach/dialog"
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText}) {
    function handleSubmit(event) {
        event.preventDefault();
        const {username, password} = event.target.elements;

        onSubmit({
            username: username.value,
            passwrod: password.value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="text"></input>
            </div>
            <div>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    )
}

const App = () => {
    const [showForm, setShowForm] = React.useState('')

    const openLogin = () => setShowForm('login');

    const openRegister = () => setShowForm('register');
    
    const closeDialog = () => setShowForm('');

    const login = (formData) => {
        console.log("login", formData);
    };

    const register = (formData) => {
        console.log("register", formData);
    };
    
    return (
        <div>
            <Logo width="80" height="80"/>
            <h1>Bookshelf</h1>
            <div>
                <button onClick={openLogin}>Login</button>
            </div>
            <div>
                <button onClick={openRegister}>Register</button>
            </div>
            <Dialog aria-label="Login form" isOpen={showForm === 'login'} onDismiss={closeDialog}>
                <button onClick={closeDialog}>Close</button>
                <h1>Login</h1>
                <LoginForm onSubmit={login} buttonText="Login"/>
            </Dialog>
            <Dialog aria-label="Register form" isOpen={showForm === 'register'} onDismiss={closeDialog}>
                <button onClick={closeDialog}>Close</button>
                <h1>Register</h1>
                <LoginForm onSubmit={register} buttonText="Register"/>
            </Dialog>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(<App />)
export {root}
