import ForgotPasswordPage from "../pages/auth/forgotPassword-page.component";
import LoginPage from "../pages/auth/login-page.component";
import RegisterPage from "../pages/auth/register-page.component";
import ResetPasswordPage from "../pages/auth/resetPassword-page.component";
import VerifyUserPage from "../pages/auth/verifyUser-page.component";

const AuthRoutes = [
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/reset-password",
        element: <ResetPasswordPage />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
    },
    {
        path: "/verify",
        element: <VerifyUserPage />,
    },
];

export default AuthRoutes;