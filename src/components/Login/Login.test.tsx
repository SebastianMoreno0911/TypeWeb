import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Para simular rutas
import Login from './Login';

// Test básico de renderización
test('renders login form elements correctly', () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    // Comprobar si se renderiza el título y los campos de input
    expect(screen.getByText('Sistema Para Gestion De Solicitudes')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Iniciar sesion/i })).toBeInTheDocument();
    expect(screen.getByText('¿Olvidaste tu Contraseña?')).toBeInTheDocument();
});

// Test de cambio en el input de email
test('updates the email input value when typed into', () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const emailInput = screen.getByLabelText('Email:');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput).toHaveValue('test@example.com');
});

// Test de cambio en el input de contraseña
test('updates the password input value when typed into', () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const passwordInput = screen.getByLabelText('Contraseña:');

    fireEvent.change(passwordInput, { target: { value: 'myPassword123' } });

    expect(passwordInput).toHaveValue('myPassword123');
});