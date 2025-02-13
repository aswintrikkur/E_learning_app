import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
// import { Link } from "lucide-react";

export const Header = () => {
    return (
        <div className="flex w-full justify-between items-center px-20 py-10 bg-background">
            <div>
                <h1 className="text-3xl font-bold">Logo</h1>
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
            <div className="flex gap-5">
                <Button variant="outline" >Log-in</Button>
                <Button variant="destructive">Join us</Button>
            </div>
        </div>
    );
};
