import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { CadastroPage } from "../pages/cadastro";
import { HomePage } from "../pages/dashboard/home";

export function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />

            {/* Private Routes */}
            <Route path="/dashboard">
                <Route path="/dashboard" element={<HomePage />}/>
            </Route>
        </Routes>
    )
} 