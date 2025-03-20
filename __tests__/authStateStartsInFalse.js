import {AuthProvider, useAuth} from "../src/context/AuthContext.tsx"
import { render, screen } from '@testing-library/react';


const ConsumerComponentMock = () => {
    const {isAuthenticated} = useAuth();
    
    return (<div data-testid="consumer">{isAuthenticated.toString()}</div>)
}

test("El estado de autenticacion inicia en false", () => {
    render(
        <AuthProvider>
            <ConsumerComponentMock />
        </AuthProvider>
    );

    expect(screen.getByTestId("consumer").textContent).toBe("true");
})