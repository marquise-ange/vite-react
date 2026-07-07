import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";


export default function ProtectedRoute({ children }) {

    const user = getCurrentUser();


    if (!user || !user.verified) {

        return <Navigate to="/login" />;

    }


    return children;

}