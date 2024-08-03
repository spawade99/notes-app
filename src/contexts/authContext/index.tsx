import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/auth/firebaseConfig";
import { User } from "firebase/auth";

export type AuthContextType = {
    currentUser: User | null;
    isLoggedIn: boolean;
    loading: boolean
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
                setIsLoggedIn(true);
                setLoading(false);
            }

        });
        return unsubscribe;
    }, []);
    const value: AuthContextType = { currentUser, isLoggedIn, loading };
    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}