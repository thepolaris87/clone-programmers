import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ToastMessage from './components/ToastMessage';
import { Suspense } from 'react';
import Loading from './components/Loading';

const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } }
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading />}>
                <ToastMessage>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </ToastMessage>
            </Suspense>
        </QueryClientProvider>
    );
}

export default App;
