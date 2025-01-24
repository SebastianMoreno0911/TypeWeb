import { useState } from "react";
import forgotImage from '/src/assets/images/forgot-password.png';
import loginImagen from '/src/assets/images/usc.png'
import './ForgotPass.css';
import { Link } from "react-router-dom";

const forgotPassword = () => {

    const [email, SetEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (!email) {
            setMessage('Por favor, ingresa un correo electronico.')
            return;
        }

        //creo que va la logica para enviar un codigo de recuperacion o la contraseña al correo
    };

    return (
        <div className="forgot-password-container">

            <div className='image-container'>
                <img src={loginImagen} alt='login' className='login-image' />
            </div>

            <div className="form-container">

                <img src={forgotImage} alt="Forgot Password" className="forgot-image" />

                <h2>¿Olvido Su Contraseña?</h2>
                <p>Ingrese su direccion de correo electronico para recibir la contraseña.</p>

                <div className='form-group'>

                    <label htmlFor="email">Correo Electronico</label>

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                        placeholder="Ingresa tu correo electronico"
                    />

                    <button onClick={handleSubmit}>Enviar correo de recuperacion</button>
                    {message && <p>{message}</p>}

                    <div className="return-login">
                        <Link to="/">Volver al inicio de sesion</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forgotPassword;