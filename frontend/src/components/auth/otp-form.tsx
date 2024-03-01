'use client';

import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';

interface OTPFormProps {}

export const OTPForm: React.FC<OTPFormProps> = ({}) => {
    const [otp, setOtp] = useState('');
    return (
        <React.Fragment>
            <div className="flex justify-center items-center">
                <OtpInput
                    inputStyle={{
                        width: '3rem',
                        height: '3rem',
                        margin: '1rem',
                        fontSize: '2rem',
                        borderRadius: 4,
                        border: '1px solid rgba(0,0,0,0.3)',
                    }}
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => (
                        <Input {...props} className="text-black" />
                    )}
                />
            </div>
            <Button className="mx-5 my-2">Submit</Button>
            <p className="px-8 py-3 lg:py-0 text-center text-sm text-muted-foreground underline underline-offset-4 hover:text-primary">
                Resend OTP
            </p>
        </React.Fragment>
    );
};
