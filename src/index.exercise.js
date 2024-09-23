import * as React from "react";
import {createRoot} from "react-dom/client";
import {Logo} from './components/logo'
import {Dialog} from "@reach/dialog"
import '@reach/dialog/styles.css'

const App = () => {
    const [showForm, setShowForm] = React.useState('')

    const openLogin = () => setShowForm('login');

    const openRegister = () => setShowForm('register');
    
    const closeDialog = () => setShowForm('');
    
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
                <h1>Login</h1>
                <button onClick={closeDialog}>Close</button>
            </Dialog>
            <Dialog aria-label="Register form" isOpen={showForm === 'register'} onDismiss={closeDialog}>
                <h1>Register</h1>
                <button onClick={closeDialog}>Close</button>
            </Dialog>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(<App />)
export {root}
