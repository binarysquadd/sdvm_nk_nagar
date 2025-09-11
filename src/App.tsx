import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from "./pages/home-page";
import NotFound from "./pages/not-found/not-found.tsx";
import ComputerScience from "./pages/degree/computer-science/computer-science.tsx";
import Math from "./pages/degree/math/math.tsx";
import Geology from "./pages/degree/geology/geology.tsx";
import Zoology from "./pages/degree/zoology/zoology.tsx";
import Physics from "./pages/degree/physics/physics.tsx";
import Botany from "./pages/degree/botany/botany.tsx";
import Chemistry from "./pages/degree/chemistry/chemisty.tsx";
import MainLayout from "./layouts/main-layout.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/contact/contact.tsx";
import Faculty from "./pages/faculty/faculty.tsx";

export default function App() {
    const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Routes>
                  <Route element={<MainLayout />}>
                      <Route path="/" element={<Index />} />
                      <Route path='/computer-science' element={<ComputerScience />} />
                      <Route path='/math' element={<Math />} />
                      <Route path='/geology' element={<Geology />} />
                      <Route path='/zoology' element={<Zoology />} />
                      <Route path='/physics' element={<Physics />} />
                      <Route path='/botany' element={<Botany />} />
                      <Route path='/chemistry' element={<Chemistry />} />
                      <Route path='/about' element={<About />}/>
                      <Route path='/contact' element={<Contact />}/>
                      <Route path='/faculty' element={<Faculty />}/>
                  </Route>
                  <Route path='*' element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
  )
}