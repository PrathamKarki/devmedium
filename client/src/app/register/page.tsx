'use client'
import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  Card, CardHeader, CardFooter, CardTitle,  CardDescription, CardContent } from '@/components/ui/card';
import Link from "next/link";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [name, setName] = useState('');


    const togglePasswordVisibiility = () => {
        setShowPassword((prev)=> !prev);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email: ', email);
        console.log('Name:', name);
        console.log('Password', password);
        console.log('confirm Password', confirmPassword)

    }


    return(
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md rounded">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center font-semibold">Sign up</CardTitle>
                    <CardDescription className="text-sm text-gray-700 text-center">Create an account to have full access</CardDescription>
                </CardHeader>

            <CardContent className="space-y-6">
                <form action="#" className="space-y-6" >
                    <div className="space-y-2">
                        <Label htmlFor="name " className="ml-1">Full Name</Label>
                        <Input type="name" id="name"  value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button type="button" className="absolute bottom-1  h-7 py-2 right-0 " onClick={togglePasswordVisibiility}>{showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-500"/>
                            ): (
                                <Eye className="h-4 w-4 text-gray-500"/>
                            )}</Button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                            <Input type="password" id="confirmPassword" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
                            <Button className="absolute bottom-1 h-7 right-0" onClick={togglePasswordVisibiility}>{showPassword ? (
                                <EyeOff className="h-5 w-4 text-gray-500"/>
                            ):  (
                                <Eye className="h-5 w-4 text-gray-500" />
                            )}</Button>
                        </div>
                    </div>

                <Button type='submit' className='w-full'>Sign up</Button>
                </form>
            </CardContent>

            <CardFooter>
                <p className="text-center text-sm text-gray-600 w-full">
                    Already have an account? {' '} <Link href="/login" className='text-gray-800 hover:underline'>Log in</Link>
                </p>
            </CardFooter>

            </Card>
        </main>
    )
}

export default Register;
