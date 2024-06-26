import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";


export default function App() {
 
 let routes = createHashRouter([
    {path: '', element: <Layout/>, children:[
      {index: true, element:<Home/>},
      {path: 'about', element:<About/>},
      {path: 'contact', element:<Contact/>},
    ]}
  ])
 
  return <>
  
   <RouterProvider router={routes}></RouterProvider>
     
  </>
  
}
