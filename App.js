import React, { Children, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

// to Provide theme to Application
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./src/Utils/GlobalStyle";

import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

import Header from "./src/componets/Header";
import Body from "./src/componets/Body"
import Footer from "./src/componets/Footer"
import ErrorPage from "./src/componets/ErrorPage";
import About from "./src/componets/About";
import Contact from "./src/componets/Contact";
import RestaurantMenu from "./src/componets/RestaurantMenu";
// import VegMart from "./src/componets/VegMart/Vegmart"

const VegMart = lazy(() => import("./src/componets/VegMart/Vegmart"))



// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {

    const theme = {
        colors: {
            heading: "rgb(24 24 29)",
            header__shadow: "0 15px 40px -20px rgba(40, 44, 63, .15)",
            res_card__shadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            text: "rgba(29 ,29, 29, .8)",
            white: "#fff",
            black: " #212529",
            helper: "#8490ff",

            bg: "#F6F8FA",
            footer_bg: "#0a1435",
            btn: "rgb(98 84 243)",
            border: "rgba(98, 84, 243, 0.5)",
            hr: "#ffffff",
            gradient:
                "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
        },
        media: {
            mobile: "768px",
            tab: "998px",
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/vegMart",
                element: <Suspense fallback={<h1>loading .....</h1>}><VegMart /></Suspense>
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
                path: "/restaurantMenu/:resid",
                element: <RestaurantMenu />,
            }
        ]
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);