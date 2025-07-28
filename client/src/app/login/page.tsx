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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [password, setPassword] = useState('');

  const [email, setEmail ] = useState('');
  
  

  const togglePasswordVisibiility = () => {
    setShowPassword((prev) => !prev);
  }
  

  // submit form funciton
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login details");
    console.log("Email is: ", email);
    console.log('Password is ', password);
    alert('Form submitted!');
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
              <form  onSubmit={handleSubmit}  className='space-y-6'>
                <div className="space-y-2">
                  <Label htmlFor='email' className='ml-1'>Email</Label>
                  <Input id='email' type='email' placeholder='john@example.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                
              {/* for password input field */}
              <div className="space-y-2">
                <Label htmlFor='password'>Password</Label>
                <div className="relative">
                  <Input id='password' type={showPassword ? 'text' : 'password'} placeholder='**********' value={password} onChange={(e)=> setPassword(e.target.value)} />
                  <Button type='button' size='sm' className='absolute bottom-1  h-7 py-2 right-0 ' onClick={togglePasswordVisibiility}>
                    {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                  </Button>
                </div>
              </div>
              {/* remember me checkbox */}
              <div className="flex">
                <div className="flex items-center space-x-2">
                  <Checkbox  id='rememberMe' checked={rememberMe}/>
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