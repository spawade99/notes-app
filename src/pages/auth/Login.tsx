import { useState } from "react";
import { logInWithEmailAndPassword } from "../../firebase/auth";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        logInWithEmailAndPassword(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
            />
            <button type='submit'>Login</button>
        </form>
    );
};
