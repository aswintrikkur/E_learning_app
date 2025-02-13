import { UserLayout } from "@/layout/UserLayout";
import { LoginPage } from "@/pages/shared/LoginPage";
import { SignupPage } from "@/pages/shared/SignupPage";
import { AboutPage } from "@/pages/user/AboutPage";
import { ContactPage } from "@/pages/user/ContactPage";
import { CourseDetailsPage } from "@/pages/user/CourseDetailsPage";
import { CoursesPage } from "@/pages/user/CoursesPage";
import { HomePage } from "@/pages/user/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProtectedRoutes } from "./ProtectedRoutes";
import { CartPage } from "@/pages/user/CartPage";
import { ProfilePage } from "@/pages/user/ProfilePage";
import { OrdersPage } from "@/pages/user/OrdersPage";
import { WishlistPage } from "@/pages/user/WishlistPage";

export const router = createBrowserRouter([
    {
        path: "",
        element: <UserLayout />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <SignupPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "courses",
                element: <CoursesPage />,
            },
            {
                path: "courseDetails/:id",
                element: <CourseDetailsPage />,
            },

            {
                path: "user",
                element: <UserProtectedRoutes />,
                children: [
                    {
                        path: "cart",
                        element: <CartPage />,
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />,
                    },
                    {
                        path: "orders",
                        element: <OrdersPage />,
                    },
                    {
                        path: "wishlist",
                        element: <WishlistPage />,
                    },
                ],
            },
        ],
    },
]);
