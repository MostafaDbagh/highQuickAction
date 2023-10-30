
import { Route, Routes } from 'react-router-dom';



import {Layout} from "./components/layout";

import { Home } from './pages/home';
import AboutUs from "./pages/aboutUs";
import ContactUS from "./pages/ContactUS";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import NotFound from './pages/notFound';

function App() {
  return (
    <div className="App">
      <Layout>


<Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUS/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route element={NotFound} />
      </Routes>
            </Layout>
    </div>
  );
}

export default App;
