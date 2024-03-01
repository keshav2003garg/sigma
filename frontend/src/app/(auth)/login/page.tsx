import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { AuthForm } from '@/components/auth/auth-form';

export const metadata: Metadata = {
    title: 'Login - sigma',
    description: 'Login page for sigma, a video processing api service..',
};

export default function Login() {
    return (
        <React.Fragment>
            <Link
                href="/signup"
                className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'absolute right-4 top-4 md:right-8 md:top-8',
                )}
            >
                Signup
            </Link>
            <AuthForm form="login" />
        </React.Fragment>
    );
}
