import { Route, Routes } from 'react-router-dom';
import CodingTest from './pages/Coding';
import SignIn from './pages/SignIn/SignIn';
import React from 'react';
import Main from './pages/Main/Main';
import CodingList from './pages/CodingList/CodingList';

export default function Router() {
    return (
        <Routes>
            <Route path='/learn/courses' element={<CodingTest />}></Route>
            <Route path='/sign-in' element={<SignIn />}></Route>
            <Route path='/learn/challenges' element={<CodingList />}></Route>
        </Routes>
    );
}
