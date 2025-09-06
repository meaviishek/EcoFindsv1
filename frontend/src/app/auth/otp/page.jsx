'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input.jsx'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

function OtpPage() {
  const [otp, setOtp] = useState("")
  const router = useRouter()

  const handleVerifyOtp = () => {
    if (!otp.length) {
      toast.error("Please enter the OTP.");
      return;
    }
    // Add OTP verification logic here
    toast.success("OTP verified!");
    // Redirect or perform next steps
    // router.push('/dashboard');
  }

  return (
    <div className="h-[100vh] flex justify-center items-center bg-green-50">
     <div className="h-[40vh] bg-white border-green-200 shadow-2xl w-[90vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] rounded-3xl flex flex-col items-center justify-center gap-8 p-8">

        <h2 className="text-3xl font-bold text-green-700 mb-2">Enter OTP</h2>
        <p className="text-green-600 text-center mb-4">Please enter the OTP sent to your email to verify your account.</p>
        <Input
          placeholder="Enter OTP"
          type="text"
          className="rounded-full p-6 border-green-300 focus:border-green-500 w-full"
          value={otp}
          onChange={e => setOtp(e.target.value)}
        />
        <Button
          className="rounded-full p-6 bg-green-600 hover:bg-green-700 text-white w-full"
          onClick={handleVerifyOtp}
        >
          Verify OTP and Register
        </Button>
      </div>
    </div>
  )
}
export default OtpPage