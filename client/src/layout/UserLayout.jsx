import { Footer } from "@/components/user/Footer";
import { Header } from "@/components/user/Header";
import { UserHeader } from "@/components/user/UserHeader";
import React from "react";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
    const isUserAuth = false;

    return (
        <>
            {isUserAuth ? <UserHeader /> : <Header />}
            <div className="container mx-auto min-h-96 px-6  lg:px-20 pt-6 pb-10 bg-secondary">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
