import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const[session, setSession] = useState(undefined);

    // registrar nuevo usuario
    const signUpNewUser = async (email, password) => {
        const{data,error} = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if(error) {
            console.error("Error al iniciar sesion: ", error);
            return{success: false,error};
        }
        return { success: true, data };
    };

    // iniciar sesion
    const signInUser = async (email, password) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if(error) {
                console.error("Error al iniciar sesion: ", error);
                return { success: false, error: error.message };
            }
            console.log("Inicio de sesion exitoso: ", data);
            return { success: true, data };
        }catch(error) {
            console.error("a ocurrido un error: ", error);

        };
    };

    useEffect(() => {
        supabase.auth.getSession().then(({data:{ session }})=>{
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    // Cerrar sesion
    const signOut = () => {
        const { error } = supabase.auth.signOut();
        if(error) {
            console.error("Hubo un error(cerrar sesion): ", error);
        }
    };

    return (
        <AuthContext.Provider value={{ session, signUpNewUser, signInUser, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};