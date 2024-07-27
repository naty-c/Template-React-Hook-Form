import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: async () => {}, // Login
    signOut: () => {} // Remove user state
});

// Example simulating API request
async function apiAuth(url, data) {
    console.log(url, data)
    return new Promise(resolve => setTimeout(resolve, 3000))
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem('@lab365:userLogged')

        if(userLoggedStorage) {
            return JSON.parse(userLoggedStorage)
        }
        return null
    });

    async function signIn(data) {

        if(data.email !== "fulano@teste.com.br" || data.password !== "123") {
            throw new Error("Email/Senha invalida")
        }

    // const response = await apiAuth('https://api.lab365.com.br/sessions', data)
        await apiAuth('https://api.lab365.com.br/sessions', data)

        const userResponse = {
            id: Date.now(),
            first_name: "Yuki",
            email: data.email
        }

    setUser(userResponse)
    localStorage.setItem('userLogged', JSON.stringify(userResponse))
    localStorage.setItem('@lab365:token', Date.now())

        // setUser({
        //     id: Date.now(),
        //     first_name: "Yuki",
        //     email: "yuki@lab365.com.br"
        // })
        // localStorage.setItem('user', )
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@lab365:userLogged')
        localStorage.removeItem('@lab365:token')

    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}