import { Route, Routes } from 'react-router-dom';
import CodingTest from './pages/Coding';
import SignIn from './pages/SignIn/SignIn';

export default function Router() {
    return (
        <Routes>
            <Route path='/learn/courses' element={<CodingTest />}></Route>
            <Route path='/sign-in' element={<SignIn />}></Route>
            {/* <Route path='/comes/sign-up' element={<SignIn />}></Route> */}
        </Routes>
    );
}
