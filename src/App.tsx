import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Home"
import GalleryPage from "./pages/Gallery";
import gymGalleries from "./utils/galleries";
import ClassesPage from "./pages/Classes";
import SchedulesPage from "./pages/Schedules";
import ServicesPage from "./pages/Services";
import ProductPage from "./pages/Product";
import AboutUsPage from "./pages/AboutUs";
import BranchesPage from "./pages/Branches";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/home" element={<HomePage />}> </Route>
        <Route path="/gallery/ironfort" element={<GalleryPage route="ironfort" images={gymGalleries.ironFort.images} />} />
        <Route path="/gallery/titaniumarena" element={<GalleryPage route="titaniumarena" images={gymGalleries.titaniumArena.images} />} />
        <Route path="/gallery/thunderdome" element={<GalleryPage route="thunderdome" images={gymGalleries.thunderdome.images} />} />
        <Route path="/classes" element={<ClassesPage></ClassesPage>} ></Route>
        <Route path="/schedule/ironfort" element={<SchedulesPage route="ironfort"></SchedulesPage>} ></Route>
        <Route path="/schedule/titaniumarena" element={<SchedulesPage route="titaniumarena"></SchedulesPage>} ></Route>
        <Route path="/schedule/thunderdome" element={<SchedulesPage route="thunderdome"></SchedulesPage>} ></Route>
        <Route path="/services" element={<ServicesPage></ServicesPage>} ></Route>
        <Route path="/smart_fitness_tracker" element={<ProductPage></ProductPage>} ></Route>
        <Route path="/about" element={<AboutUsPage></AboutUsPage>} ></Route>
        <Route path="/branches" element={<BranchesPage></BranchesPage>} ></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>} ></Route>
        <Route path="*" element={<ErrorPage codeError="404" help="The page you're looking for does not exist. Please check the URL or return to the homepage." errorMessage="Page not found" />} />

      </Routes> 
    </BrowserRouter>
  )
}

