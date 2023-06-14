import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ToastMessage from './components/ToastMessage';

const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } }
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastMessage>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ToastMessage>
        </QueryClientProvider>
    );
}

export default App;
