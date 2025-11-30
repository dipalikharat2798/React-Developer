import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {App} from "./src/pages/container/App";
import { ContentComponent } from "./src/pages/components/Content/ContentComponent";
import { AboutUs } from "./src/pages/components/About/AboutUs";
import { ContactUs } from "./src/pages/components/ContactUs/ContactUs";
import { Cart } from "./src/pages/components/Cart/Cart";
import { ErrorPage } from "./src/pages/components/Error/Error";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <ContentComponent /> }, // home page
      { path: "about", element: <AboutUs /> },
      { path:"contact", element:<ContactUs/>},
      { path:"cart", element:<Cart/>},

    ]
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
