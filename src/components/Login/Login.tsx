import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import loginImagen from '/src/assets/images/usc.png'
import formImagen from '/src/assets/images/logo-form.png'
import './Login.css';
import { Link } from "react-router-dom";

//ts es codigo
//tsx es visual
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); // Inicializa useNavigate con este navego entre ventanas si se comprueba el token

    const EXPO_PUBLIC_CLIENT_ID = "f8d4384a-4398-4f23-9a7a-da5b88675a0e";
    const EXPO_PUBLIC_CLIENT_SECRET = "6a2947c8-e89d-4cc4-9f6e-92dd1712ffed";
    const EXPO_PUBLIC_GRANT_TYPE = "password";
    const EXPO_PUBLIC_USERNAME = "jhmusa1@hotmail.com";
    const EXPO_PUBLIC_PASSWORD = "2021Fl3etAdv@ntage";

    const handleLogin = async () => {
        try {
            const body = `client_id=${EXPO_PUBLIC_CLIENT_ID}&client_secret=${EXPO_PUBLIC_CLIENT_SECRET}&grant_type=${EXPO_PUBLIC_GRANT_TYPE}&username=${EXPO_PUBLIC_USERNAME}&password=${EXPO_PUBLIC_PASSWORD}`;
            const response = await api.post("/token", body, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            console.log(response)
            localStorage.setItem("token", response.data.access_token); // Guarda el token en el localStorage
            alert("Login successful!");
            navigate("/Inicio"); //se navega luego del login
        } catch (error) {
            console.error("Login error", error);
            alert("Login failed");
        }
    };


    return (
        <div className='login-container'>

            <div className='image-container'>
                <img src={loginImagen} alt='login' className='login-image' />
            </div>

            <div className='form-container'>

                <img src={formImagen} alt='Logo' className='logo-imagen' />

                <h2>Sistema Para Gestion De Solicitudes</h2>

                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>

                    <input
                        type='email'
                        id='email'
                        placeholder='Ingresa tu Email'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Contraseña:</label>

                    <input
                        type='password'
                        id='password'
                        placeholder='Ingresa tu Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleLogin}>Iniciar sesion</button>

                <div className='forgot-password'>
                    <Link to='/ForgotPass'>¿Olvidaste tu Contraseña?</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;
