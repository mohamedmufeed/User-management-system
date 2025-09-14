import type { JSX } from "react"
import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
    children: JSX.Element
    adminOnly?: boolean
}
const ProtectedRoute = ({ children, adminOnly = false }: ProtectedRouteProps) => {
    const { isAuthenticated, isAdmin } = useAuth()
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    if (adminOnly && !isAdmin) {
        return <Navigate to="/" />
    }
    return children
}

export default ProtectedRoute