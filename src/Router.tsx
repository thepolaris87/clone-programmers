import { Route, Routes } from 'react-router-dom';
import CodingTest from './pages/Coding';

export default function Router() {
    return (
        <Routes>
            <Route path='/learn/courses' element={<CodingTest />}></Route>
        </Routes>
    );
}
