import { useContext } from 'react';
import cl from '../modals/Login.module.css';
import { Auth } from '../context';
import Loader from '../Loader';

export default function Login() {
    const {auth, setAuth} = useContext(Auth);
    const submit = e => {
        e.preventDefault();
        setAuth(true);
        localStorage.setItem('auth', true)
    };
    return (
        <div>
            <h1>Лагинься</h1>
            <form onSubmit={submit}>
                <input type="text" placeholder="ник" className={cl.text}/>
                <input type="password" placeholder="пароль" className={cl.pass}/>
                <input type="submit" value="залагиница" className={cl.btn}/>
            </form>  
        </div>
    );
};