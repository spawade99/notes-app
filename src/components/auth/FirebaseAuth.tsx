
import { useEffect } from "react";
import {
    EmailAuthProvider,
    GoogleAuthProvider,
} from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { auth } from "../../firebase/auth/firebaseConfig";

export const FirebaseAuth = () => {
    useEffect(() => {
        const uiConfig = {
            signInOptions: [
                {
                    provider: GoogleAuthProvider.PROVIDER_ID,
                    customParameters: {
                        // Forces account selection even when one account
                        // is available.
                        prompt: "select_account",
                    },
                    signInSuccessUrl: "/",
                    signInFlow: "popup",
                },
                {
                    provider: EmailAuthProvider.PROVIDER_ID,
                    SignInMethod: EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
                    requireDisplayName: true,
                    signInSuccessUrl: "/",
                },
            ],
        };

        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.disableAutoSignIn();
        ui.start("#firebaseui-auth-container", uiConfig);
    }, []);

    return <div id='firebaseui-auth-container'></div>;
};
