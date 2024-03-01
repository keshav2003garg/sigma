import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { AuthForm } from '@/components/auth/auth-form';

export const metadata: Metadata = {
    title: 'sigma - Signup',
    description: 'Signup page for sigma, a video processing api service.',
    
};

export default function Signup() {
    return (
        <React.Fragment>
            <Link
                href="/login"
                className={cn(
                    buttonVariants({ variant: 'default' }),
                    'absolute right-4 top-4 md:right-8 md:top-8',
                )}
            >
                Login
            </Link>
            <AuthForm form="signup" />
        </React.Fragment>
    );
}
