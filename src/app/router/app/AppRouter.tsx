import { RouterProvider } from 'react-router-dom'
import {router} from "@/app/router/config/createRouter";

export const AppRouter = () => {
    return <RouterProvider router={router} />
}