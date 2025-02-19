import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Dashboard from "./controlPanel/dashboard";
import RutaPrivada from "./components/RutaPrivada";
import OtpEmail from "./components/OtpEmail";
import ProfileData from "./controlPanel/profileData";
import InfoPerfil from "./components/infoPerfil";


export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/signin", element: <Signin/>},
    {path: "/signup", element: <Signup/>},
    {path: "/otpemail", element: <OtpEmail/>},
    {path: "/infoPerfil", element: <InfoPerfil/>},
    {path: "/dashboard", element: <RutaPrivada> <Dashboard/> </RutaPrivada>},
    {path: "/profiledata", element: <RutaPrivada> <ProfileData/> </RutaPrivada>},
    {path: "*", element: <h1>404</h1>},
])