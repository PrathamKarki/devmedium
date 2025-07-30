'use client'
import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  Card, CardHeader, CardFooter, CardTitle,  CardDescription, CardContent } from '@/components/ui/card';
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { required } from "zod/v4-mini";


const Register = () => {
   

    const {register, handleSubmit, formState: {errors}} = useForm()

    //form submission handler
    const handleOnClick = (data) => {
        console.log('form data:', data);
    }
  

    return(
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md rounded">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center font-semibold">Sign up</CardTitle>
                    <CardDescription className="text-sm text-gray-700 text-center">Create an account to have full access</CardDescription>
                </CardHeader>

            <CardContent className="space-y-6">
                <form action="#" className="space-y-6" onSubmit={handleSubmit(handleOnClick)} >
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="ml-1">Full Name</Label>
                        <Input type="text" id="fullName"  {...register('fullName',  {required: 'Full name is required'})}/>
                        {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">{errors.fullName.message?.toString()}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" {...register('email', {required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}/>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input type='password' id="password" {...register('password', {required: 'password is required'})} />
                             {errors.password && (
                    <p className='text-red-500 text-sm mt-1'>{errors.password.message?.toString()}</p>
                  )}
            
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                            <Input type="password" id="confirmPassword" {...register('confirmPassword', {required: 'password is required'})} />
                    {errors.confirmPassword && (
                    <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword.message?.toString()}</p>
                  )}
                           
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
