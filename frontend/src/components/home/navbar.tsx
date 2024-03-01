import React from 'react';
import { MainNav } from './utils/main-nav';
import { UserNav } from './utils/user-nav';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className="sticky top-0 z-50 bg-black">
            <div className="flex h-16 items-center px-4">
                <p className="hidden lg:flex mr-4 text-3xl font-semibold text-white">
                    sigma
                </p>
                <MainNav className="mt-2" />
                <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                </div>
            </div>
        </div>
    );
};
