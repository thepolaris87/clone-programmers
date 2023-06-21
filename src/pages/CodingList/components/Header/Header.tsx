import React from 'react';
import TopNavBar from './TopNavBar';
import { Navbar } from '@/components/Navbar';
import BottomNavBar from './BottomNavBar';

export default function Header() {
    return (
        <>
            <TopNavBar />
            <Navbar />
            <BottomNavBar />
        </>
    );
}
