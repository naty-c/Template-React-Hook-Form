import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: () => {}, // Login
    signOut: () => {} // Remove user state
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function signIn() {
        setUser({
            id: Date.now(),
            first_name: "Yuki",
            email: "yuki@lab365.com.br"
        })
        // localStorage.setItem('user', )
    }

    function signOut() {
        setUser(null)
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}