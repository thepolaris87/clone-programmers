import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';

console.log('aa')

function App() {
    return (
        <>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;
