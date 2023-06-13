import { Route, Routes } from 'react-router-dom';
import CodingTest from './pages/Coding';
import SignIn from './pages/SignIn/SignIn';
import CodingList from './pages/CodingList/CodingList';
import MyPage from './pages/MyPage';

export default function Router() {
    return (
        <Routes>
            <Route path="/learn/courses" element={<CodingTest />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/learn/challenges" element={<CodingList />}></Route>
            <Route path="/my-page" element={<MyPage />}></Route>
        </Routes>
    );
}
