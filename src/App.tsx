import { AuthProvider } from "./contexts/authContext";
import { logOut, signInWithGoogle, } from "./firebase/auth";
import { auth } from "./firebase/auth/firebaseConfig";
import { FirebaseAuth } from "./components/auth/FirebaseAuth";
import { Button } from "@/components/ui/button";

import NotesPage from "./components/NotesPage";
import { Circle, Image, LogOut, Mail, UserCircle, UserCircle2 } from "lucide-react";
import "./app.scss"
import { Profile } from "./components/Profile";
import { LogIn } from "./components/auth/Login";

function App() {
  const logoutHanlder = () => {
    logOut().finally(() => {
      window.location.reload();
    });
  };

  return (
    <div id={""}>
      <Profile />
      {!auth?.currentUser && (
        <>
          <LogIn />
        </>
      )}

      <AuthProvider>
        <div className="right-1">
          <Button onClick={logoutHanlder}>   <LogOut />Log Out</Button>
        </div>
        <NotesPage />
      </AuthProvider>
    </div>
  );
}

export default App;
