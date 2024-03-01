'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { OTPForm } from './otp-form';

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    form: 'login' | 'signup';
}

export function AuthForm({ className, form }: AuthFormProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <div className="py-48 lg:py-0">
            <div className="px-8 py-10 border-2 border-input rounded-xl lg:border-0">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            {form === 'login'
                                ? 'Login to your account'
                                : 'Create your account'}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                        </p>
                    </div>
                    <div className={cn('grid gap-6', className)}>
                        <form onSubmit={onSubmit}>
                            <div className="grid gap-2">
                                <div className="grid gap-1">
                                    <Label className="sr-only" htmlFor="email">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                    />
                                </div>
                                {isDesktop ? (
                                    <Dialog open={open} onOpenChange={setOpen}>
                                        <DialogTrigger asChild>
                                            <Button disabled={isLoading}>
                                                {isLoading && (
                                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                )}
                                                <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
                                                Continue with Email
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Verify OTP
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Enter the OTP sent to your
                                                    email
                                                </DialogDescription>
                                            </DialogHeader>
                                            <OTPForm />
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <Drawer open={open} onOpenChange={setOpen}>
                                        <DrawerTrigger asChild>
                                            <Button disabled={isLoading}>
                                                {isLoading && (
                                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                                )}
                                                <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
                                                Continue with Email
                                            </Button>
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader className="text-left">
                                                <DrawerTitle>
                                                    Verify OTP
                                                </DrawerTitle>
                                                <DrawerDescription>
                                                    Enter the OTP sent to your
                                                    email
                                                </DrawerDescription>
                                            </DrawerHeader>
                                            <OTPForm />
                                        </DrawerContent>
                                    </Drawer>
                                )}
                            </div>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            type="button"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Icons.google className="mr-2 h-4 w-4" />
                            )}{' '}
                            Google
                        </Button>
                        <Button
                            variant="outline"
                            type="button"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Icons.gitHub className="mr-2 h-4 w-4" />
                            )}{' '}
                            GitHub
                        </Button>
                    </div>
                    {form === 'login' ? (
                        <p className="px-8 text-center text-sm text-muted-foreground underline underline-offset-4 hover:text-primary">
                            New? <Link href="/signup">Create an account</Link>
                        </p>
                    ) : (
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{' '}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
