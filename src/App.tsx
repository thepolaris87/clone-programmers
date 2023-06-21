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
    defaultOptions: { queries: { suspense: true } }
});

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <GlobalProvider>
                            <ToastMessage>
                                <Router />
                            </ToastMessage>
                        </GlobalProvider>
                    </Suspense>
                </ErrorBoundary>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
