import { AuthProvider } from "./contexts/authContext";
import { logOut, signInWithGoogle, } from "./firebase/auth";
import { auth } from "./firebase/auth/firebaseConfig";
import { FirebaseAuth } from "./components/auth/FirebaseAuth";
import { Button } from "@/components/ui/button";

import NotesPage from "./components/NotesPage";
import { Mail } from "lucide-react";
import "./app.scss"
import { ModeToggle } from "./components/ThemeToggle";
import { LogIn } from "./components/auth/Login";

function App() {
  const logoutHanlder = () => {
    logOut().finally(() => {
      console.log("logged out");
      window.location.reload();
    });
  };

  return (
    <div id={"app"}>
      {!auth?.currentUser && (
        <>
          <div className="mt-4">
            <ModeToggle />
            <LogIn />
          </div>
        </>
      )}
      <AuthProvider>
        <button type='button' onClick={logoutHanlder}>
          LogOut
        </button>
        <NotesPage />
      </AuthProvider>
    </div>
  );
}

export default App;
