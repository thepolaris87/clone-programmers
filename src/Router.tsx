import { Navigate, Route, Routes } from 'react-router-dom';
import CodingTest from './pages/Coding';
import SignIn from './pages/SignIn/SignIn';
import CodingList from './pages/CodingList/CodingList';
import QuestionList from './pages/QuestionList/QuestionList';
import Question from './pages/Question/Question';
import Solution from './pages/Solution/Solution';

export default function Router() {
    return (
        <Routes>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/learn/challenges" element={<CodingList />}></Route>
            <Route path="/learn/courses/:questionId" element={<CodingTest />}></Route>
            <Route path="/learn/courses/:questionId/questions" element={<QuestionList />}></Route>
            <Route path="/questions/:questionId" element={<Question />}></Route>
            <Route path="/learn/solution/:questionId" element={<Solution />}></Route>
            <Route path="/*" element={<Navigate to="/sign-in" />}></Route>
        </Routes>
    );
}
