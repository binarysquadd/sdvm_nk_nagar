import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from "./pages/home-page";
import NotFound from "./pages/not-found/not-found.tsx";

export default function App() {
    const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path='*' element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
  )
}