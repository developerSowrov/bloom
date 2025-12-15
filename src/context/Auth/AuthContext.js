"use client"
import { createContext, useState, useEffect } from "react";
import { supabase } from "../../components/forPages/auth/lib/supabaseClient";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session, event) => {
        console.log("event",event)
        setUser(session?.user || null);
      }
    );

    return () => listener.subscription?.unsubscribe();
  }, []);

  const value = { user, setUser };

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
