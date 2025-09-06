'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input.jsx'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

function AuthPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [username, setUsername] = useState("")
    const router = useRouter()

    const validateSignup = () => {
        if (!username.length) {
            toast.error("Username is required");
            return false;
        }
        if (!email.length) {
            toast.error("Email is required");
            return false;
        }
        if (!password.length) {
            toast.error("Password is required.");
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return false;
        }
        return true;
    }

    const validateLogin = () => {
        if (!email.length) {
            toast.error("Email is required");
            return false;
        }
        if (!password.length) {
            toast.error("Password is required.");
            return false;
        }
        return true;
    }

    const handleSignupOTP = async () => {
        if (validateSignup()) {
            // Send OTP logic here
            toast.success("OTP sent to your email!");
        }
    }

    const handleLogin = async () => {
        if (validateLogin()) {
            // Login logic here
        }
    }

    const handleBack = () => {
        router.back();
    }

    return (
        <div className='h-[100vh] flex justify-center items-center bg-green-50'>
            <div className='h-[80vh] bg-white border-green-200 text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 relative '>
               <Button
                    className="absolute top-[10px] left-6 bg-green-100 text-green-700 hover:bg-green-200 rounded-full px-6 py-2"
                    onClick={handleBack}
                >
                    ← Back
                </Button>
                <div className='flex flex-col gap-10 items-center justify-center'>
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex items-center justify-center">
                            <h1 className='text-5xl font-bold md:text-6xl text-green-700'>
                                Welcome
                            </h1>
                            <Image
                                src="/victory.svg"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>
                        <p className="font-medium text-center text-green-600">Fill in the details to get started with the best chat app!</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <Tabs className='w-3/4' defaultValue='login'>
                            <TabsList className="bg-transparent rounded-none w-full" >
                                <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-green-700 text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-green-700 data-[state=active]:font-semibold data-[state=active]:border-b-green-500 p-3 transition-all duration-300">
                                    Login
                                </TabsTrigger>
                                <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-green-700 text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-green-700 data-[state=active]:font-semibold data-[state=active]:border-b-green-500 p-3 transition-all duration-300">
                                    SignUp
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                                <Input placeholder="Email" type="email" className="rounded-full p-6 border-green-300 focus:border-green-500" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input placeholder="Password" type="password" className="rounded-full p-6 border-green-300 focus:border-green-500" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Button className="rounded-full p-6 bg-green-600 hover:bg-green-700 text-white" onClick={handleLogin}>Login
                                </Button>
                            </TabsContent>
                            <TabsContent className="flex flex-col gap-5 " value="signup">
                                <Input placeholder="Username" type="text" className="rounded-full p-6 border-green-300 focus:border-green-500" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <Input placeholder="Email" type="email" className="rounded-full p-6 border-green-300 focus:border-green-500" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input placeholder="Password" type="password" className="rounded-full p-6 border-green-300 focus:border-green-500" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Input placeholder="Confirm Password" type="password" className="rounded-full p-6 border-green-300 focus:border-green-500" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <Button className="rounded-full p-6 bg-green-600 hover:bg-green-700 text-white" onClick={handleSignupOTP}>Send OTP
                                </Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className='hidden xl:flex justify-center items-center'>
                    <img src="/authbg.png" className='h-[450px] border-green-200 rounded-2xl' alt="Picture of the author" />
                </div>
            </div>
        </div>
    )
}
export default AuthPage