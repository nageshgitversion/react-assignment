import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Body from "./Body"
import Header from "./Header"
import About from "./About"
import Contact from "./Contact"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import RestaurantMenu from "./RestaurantMenu"
   


const AppLayout = ()=>{
   return (
    <div className="container">
     <Header />
          
     <Outlet />
           
     </div>
    )
}

const appRoute = createBrowserRouter([
{ 
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Body />,
  },
{
    path: "/about",
    element: <About />,
},
{
    
        path: "/contact",
        element: <Contact />,
    
},
{
    
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,

}
  ]
},


]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRoute} />);

