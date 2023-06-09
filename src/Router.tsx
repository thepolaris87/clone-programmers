import { Route, Routes } from 'react-router-dom';
import CodingTest from './pages/Coding';
import Login from './pages/SignIn/SignIn';

export default function Router() {
    return (
        <Routes>
            <Route path='/learn/courses' element={<CodingTest />}></Route>
            <Route path='/learn/sign_in' element={<Login />}></Route>
        </Routes>
    );
}
