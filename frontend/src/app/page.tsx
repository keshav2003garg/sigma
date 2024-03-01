import React from 'react';
import '@/styles/white-scrollbar.css';
import { Navbar } from '@/components/home/navbar';
import { HeroSection } from '@/components/home/hero-section';
import { Features } from '@/components/home/features';
import { PricingTab } from '@/components/home/pricing';
import { TestimonialCard } from '@/components/home/testimonial';
import { Info } from '@/components/home/info';
import { TechStack } from '@/components/home/tech-stack';
import { Footer } from '@/components/home/footer';

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <HeroSection />
            <Info />
            <PricingTab />
            <TestimonialCard />
            <Features />
            <TechStack />
            <Footer />
        </React.Fragment>
    );
}
