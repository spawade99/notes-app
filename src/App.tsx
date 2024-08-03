import { AuthProvider } from "./contexts/authContext";
import { logOut, } from "./firebase/auth";
import { auth } from "./firebase/auth/firebaseConfig";
import { FirebaseAuth } from "./pages/auth/FirebaseAuth";
import NotesPage from "./pages/NotesPage";

function App() {
  const logoutHanlder = () => {
    logOut().finally(() => {
      console.log("logged out");
      window.location.reload();
    });
  };
  return (
    <div id={"app"}>
      <h3>Loading...</h3>

      {!auth?.currentUser && (
        <>
          <FirebaseAuth />
          {/* <Login /> */}
          {/* <SignUp /> */}
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
