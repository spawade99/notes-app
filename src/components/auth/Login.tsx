import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { logInWithEmailAndPassword, signInWithGoogle } from "@/firebase/auth"
import { useState } from "react"
import { Alert } from "../ui/alert"
import { Link, Navigate, useNavigate } from "react-router-dom"

type LogInProps = {
    emailPass: string;
    google: string;
}

export function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Partial<LogInProps>>({});
    const navigation = useNavigate();

    // const validate = (): boolean => {
    //     const newErrors: Partial<LogInProps> = {};
    //     if (!user.firstName) newErrors.firstName = "First name is required";
    //     if (!user.lastName) newErrors.lastName = "Last name is required";
    //     if (!user.email) newErrors.email = "Email is required";
    //     if (!user.password) newErrors.password = "Password is required";
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        logInWithEmailAndPassword(email, password).then((response) => {
            if (response?.user)
                navigation("/notes");
            else
                setErrors({ emailPass: "Invalid email or password" });
        }).catch(() => {
            setErrors({ emailPass: "Invalid email or password" });
        });
    };

    const signInWithGoogleHandler = () => {
        signInWithGoogle().then((response) => {
            if (response?.user)
                navigation("/notes");
            else
                setErrors({ google: "Invalid email or password" });
        }).catch(() => { setErrors({ google: "Something went wrong, Try again!" }); });
    }

    return (
        <>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full" onClick={handleSubmit}>
                            Login
                        </Button>
                        {errors.emailPass && <span className="text-red-500 text-sm">{errors.emailPass}</span>}
                        <Button variant="outline" className="w-full" onClick={signInWithGoogleHandler}>
                            Login with Google
                        </Button>
                        {errors.google && <span className="text-red-500 text-sm">{errors.google}</span>}
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link to="/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

