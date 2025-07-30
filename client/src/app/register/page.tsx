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
import { zodResolver } from "@hookform/resolvers/zod";



const registerSchema = z.object({
  fullName: z.string().min(5, 'Full name must be at least 5 characters.').max(50, 'Full name cannot exceed 50 characters.'),
  email: z.string().email('Invalid email address.').min(1, 'Email is required.'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters.')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .regex(/[0-9]/, 'Password must contain at least one number.')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character.'),
  confirmPassword: z.string().min(1, 'Confirm password is required.'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ['confirmPassword'],
});

type RegisterFormInputs = z.infer<typeof registerSchema>

const Register = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);




    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(registerSchema),
    })

    //form submission handler
    const handleOnSubmit = (data: RegisterFormInputs) => {
        console.log('form data:', data);
        //later we typically send data to our backend APi
        
    }
  

    return(
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md rounded">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center font-semibold">Sign up</CardTitle>
                    <CardDescription className="text-sm text-gray-700 text-center">Create an account to have full access</CardDescription>
                </CardHeader>

            <CardContent className="space-y-6">
                <form action="#" className="space-y-6" onSubmit={handleSubmit(handleOnSubmit)} >
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="ml-1">Full Name</Label>
                        <Input type="text" id="fullName"  {...register('fullName')}/>
                        {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" {...register('email')}/>
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                    </div>

                     <div className="space-y-2">
              <Label htmlFor="password" className="ml-1 text-gray-700">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  {...register('password')} 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

                    <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="ml-1 text-gray-700">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  {...register('confirmPassword')} 
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )}
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
