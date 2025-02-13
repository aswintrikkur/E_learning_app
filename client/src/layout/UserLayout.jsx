import { Footer } from "@/components/user/Footer";
import { Header } from "@/components/user/Header";
import { UserHeader } from "@/components/user/UserHeader";
import React from "react";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
    const isUserAuth = true;

    return (
        <>
            {isUserAuth ? <UserHeader /> : <Header />}
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
