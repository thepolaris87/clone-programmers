import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

console.log('aa')

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
