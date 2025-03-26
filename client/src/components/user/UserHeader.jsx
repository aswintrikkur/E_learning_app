import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { User2Icon, ShoppingCartIcon, HeartIcon } from "lucide-react";

export const UserHeader = () => {
    return (
        <div className="flex w-full justify-between items-center px-20 py-10 bg-background shadow-lg">
            <div>
                <h1 className="text-3xl font-bold">
                    <Link to={"/"}> Logo</Link>
                </h1>
            </div>
            <nav className="">
                <ul className="flex  gap-10">
                    <Button variant="link">
                        <Link to={"/"}>Home</Link>{" "}
                    </Button>
                    <Button variant="link">
                        <Link to={"/about"}>About</Link>{" "}
                    </Button>
                    <Button variant="link">
                        <Link to={"/contact"}>Contact</Link>{" "}
                    </Button>
                </ul>
            </nav>
            <div className="flex gap-10">
                <Link to={"/user/wishlist"}>
                    <HeartIcon />
                </Link>
                <Link to={"/user/cart"}>
                    <ShoppingCartIcon />
                </Link>
                <Link to={"/user/profile"}>
                    <User2Icon />
                </Link>
            </div>
        </div>
    );
};
