import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ToastMessage from './components/ToastMessage';
import { Suspense } from 'react';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } }
});

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <ToastMessage>
                            <Router />
                        </ToastMessage>
                    </Suspense>
                </ErrorBoundary>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
