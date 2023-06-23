import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ToastMessage from './components/ToastMessage';
import { Suspense } from 'react';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import GlobalProvider from './components/GlobalProvider';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { suspense: true, refetchOnWindowFocus: false, retry: false },
        mutations: { retry: false }
    }
});

function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <GlobalProvider>
                    <QueryClientProvider client={queryClient}>
                        <Suspense fallback={<Loading />}>
                            <ToastMessage>
                                <Router />
                            </ToastMessage>
                        </Suspense>
                    </QueryClientProvider>
                </GlobalProvider>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
