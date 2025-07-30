'use client';
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import {  Card, CardHeader, CardFooter, CardTitle,  CardAction,  CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EyeOff, Eye } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the Zod schema for the login 
const loginSchema = z.object({
  email: z.string().email('Invalid email address.').min(1, 'Email is required.'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters.')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .regex(/[0-9]/, 'Password must contain at least one number.')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character.'),
    rememberMe: z.boolean().optional(),   // for checkbox
});


type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibiility = () => {
    setShowPassword((prev) => !prev);
  }

// initialize userForm with errors message
  const { register, handleSubmit, formState: { errors }} = useForm<LoginFormInputs>({
  resolver: zodResolver(loginSchema),
});


// form submission handler
  const handleOnSubmit = (data: LoginFormInputs) => {
      console.log('form data:', data)
      // here later we add api call or authentication logic later
  }
  

  return (
      <main className=' flex items-center justify-center min-h-screen  bg-gray-100 '>
        <Card className='w-full max-w-md rounded'>
          <CardHeader className='space-y-1'>
              <CardTitle className='text-2xl text-center font-semibold'>Sign in</CardTitle>
              <CardDescription className='text-center'>
                  Enter your credentials to access your account
              </CardDescription>
          </CardHeader>

          <CardContent className='space-y-6'>
              <form onSubmit={handleSubmit(handleOnSubmit)} className='space-y-6'>
                <div className="space-y-2">
                  <Label htmlFor='email' className='ml-1'>Email</Label>
                  <Input id='email' type='email' placeholder='john@example.com' 

                    {...register('email')}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
                  )}
                </div>
                
              {/* for password input field */}
              <div className="space-y-2">
                <Label htmlFor='password'>Password</Label>
                <div className="relative">
                  <Input id='password' type={showPassword ? 'text' : 'password'} placeholder='**********' {...register('password')} />
                  <Button type='button' size='sm' className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 ' onClick={togglePasswordVisibiility}>
                    {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                  </Button>
                  {errors.password && (
                    <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>
                  )}
                </div>
              </div>
              {/* remember me checkbox */}
              <div className="flex">
                <div className="flex items-center space-x-2">
                  <Checkbox  id='rememberMe'  {...register('rememberMe')}/>
                  <Label htmlFor='rememberMe' className='text-sm'>Remember me</Label>
                </div>
              </div>

                <Button type='submit' className='w-full'>Log in</Button>
              </form>

              <CardFooter>
                 <p className="text-center text-sm text-gray-600 w-full">
                  Don't have an account yet? {' '} <Link href='/register' className='text-gray-800 hover:underline'>Sign up</Link>
                 </p>
              </CardFooter>
          </CardContent>

        </Card>
    
           
      </main>
  )
}

export default Login