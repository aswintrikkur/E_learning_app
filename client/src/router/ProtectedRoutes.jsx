import React from "react";
import { Outlet } from "react-router-dom";

export const UserProtectedRoutes = () => {
    return <Outlet />;
};

export const MentorProtectedRoutes = () => {
    return <Outlet />;
};

export const AdminProtectedRoutes = () => {
    return <Outlet />;
};
