import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Main from "./components/main"
import Auth from "./components/auth"
import FormInput from "./components/form_input"
import FormOutput from "./components/form_output"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "/form_input",
        element: <FormInput />,
    },
    {
        path: "/form_output",
        element: <FormOutput />,
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    );
} 
