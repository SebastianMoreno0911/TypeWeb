import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ForgotPass from './ForgotPass';
import { describe, it, expect } from 'vitest';

describe('ForgotPass Component', () => {
    it('should render the form correctly', () => {
        render(
            <MemoryRouter>
                <ForgotPass />
            </MemoryRouter>
        );

        // Verifica que se renderice el título y el input de correo electrónico
        expect(screen.getByText('¿Olvido Su Contraseña?')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo Electronico')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Ingresa tu correo electronico')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Enviar correo de recuperacion' })).toBeInTheDocument();
        expect(screen.getByText('Volver al inicio de sesion')).toBeInTheDocument();
    });

    it('should show an error message if email is empty and button is clicked', () => {
        render(
            <MemoryRouter>
                <ForgotPass />
            </MemoryRouter>
        );

        // Haz clic en el botón sin haber ingresado correo electrónico
        const submitButton = screen.getByRole('button', { name: 'Enviar correo de recuperacion' });
        fireEvent.click(submitButton);

        // Verifica que se muestre el mensaje de error
        expect(screen.getByText('Por favor, ingresa un correo electronico.')).toBeInTheDocument();
    });

    it('should update email state when typing', () => {
        render(
            <MemoryRouter>
                <ForgotPass />
            </MemoryRouter>
        );

        // Simula el ingreso de texto en el campo de correo electrónico
        const emailInput = screen.getByPlaceholderText('Ingresa tu correo electronico');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        // Verifica que el input contenga el valor ingresado
        expect(emailInput).toHaveValue('test@example.com');
    });

    it('should not show an error message if email is provided', () => {
        render(
            <MemoryRouter>
                <ForgotPass />
            </MemoryRouter>
        );

        // Ingresa un correo electrónico
        const emailInput = screen.getByPlaceholderText('Ingresa tu correo electronico');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        // Haz clic en el botón
        const submitButton = screen.getByRole('button', { name: 'Enviar correo de recuperacion' });
        fireEvent.click(submitButton);

        // Verifica que no se muestre el mensaje de error
        const errorMessage = screen.queryByText('Por favor, ingresa un correo electronico.');
        expect(errorMessage).not.toBeInTheDocument();
    });
});
