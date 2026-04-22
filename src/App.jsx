import "./App.css";
import { Route, RouterProvider } from "react-router-dom";
import { createHashRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AllBlogs from "./pages/AllBlogs";
import "bootstrap-icons/font/bootstrap-icons.css";
import NotFound from "./pages/NotFound";
import { Contact } from "./components/Contact";
function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<AllBlogs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="contact" element={<Contact />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
