import { useState } from "react";
import { createNewUserWithEmailAndPassword } from "../../firebase/auth";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export type SignUpProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export function SignUp() {
    const [user, setUser] = useState<SignUpProps>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<Partial<SignUpProps>>({});
    const navigation = useNavigate();

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [id]: value }));
    };

    const validate = (): boolean => {
        const newErrors: Partial<SignUpProps> = {};
        if (!user.firstName) newErrors.firstName = "First name is required";
        if (!user.lastName) newErrors.lastName = "Last name is required";
        if (!user.email) newErrors.email = "Email is required";
        if (!user.password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (validate()) {
            const response = await createNewUserWithEmailAndPassword(user.email, user.password);
            console.log(response);
            navigation("/notes");
            // history.push("/login");
        }
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input
                                id="firstName"
                                placeholder="Max"
                                value={user.firstName}
                                onChange={handleUserChange}
                                required
                            />
                            {errors.firstName && (
                                <span className="text-red-500 text-sm">{errors.firstName}</span>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input
                                id="lastName"
                                placeholder="Robinson"
                                value={user.lastName}
                                onChange={handleUserChange}
                                required
                            />
                            {errors.lastName && (
                                <span className="text-red-500 text-sm">{errors.lastName}</span>
                            )}
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={user.email}
                            onChange={handleUserChange}
                            required
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email}</span>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={handleUserChange}
                            required
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">{errors.password}</span>
                        )}
                    </div>
                    <Button type="submit" className="w-full" onClick={handleSubmit}>
                        Create an account
                    </Button>
                    <Button variant="outline" className="w-full">
                        Sign up with GitHub
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}