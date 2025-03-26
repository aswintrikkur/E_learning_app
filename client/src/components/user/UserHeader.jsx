import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { User2Icon, ShoppingCartIcon, HeartIcon, Menu, X } from "lucide-react";
import { DarkMode } from "../shared/DarkMode";
import { CallToActionButton } from "../shared/Buttons";

export const UserHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="w-full bg-background shadow-lg">
            <div className="flex justify-between items-center px-6 py-5 md:px-20">
                <h1 className="text-2xl md:text-3xl font-bold cursor-pointer" onClick={() => navigate("/")}>
                    LearnHub
                </h1>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8">
                    <Button variant="link">
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Button variant="link">
                        <Link to={"/about"}>About</Link>
                    </Button>
                    <Button variant="link">
                        <Link to={"/contact"}>Contact</Link>
                    </Button>
                    <Button variant="link">
                        <Link to={"/courses"}>Courses</Link>
                    </Button>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex md:items-center gap-5">
                    <DarkMode />
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

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden flex flex-col items-center bg-background border-t border-border py-4">
                    <Link to={"/"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to={"/about"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link to={"/contact"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    <Link to={"/courses"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                        Courses
                    </Link>

                    <div className="mt-4 flex flex-col gap-3">
                        <div className="flex items-center gap-5">
                            <DarkMode />
                            <Link to={"/user/wishlist"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                                <HeartIcon />
                            </Link>
                            <Link to={"/user/cart"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                                <ShoppingCartIcon />
                            </Link>
                            <Link to={"/user/profile"} className="py-2 text-lg" onClick={() => setIsOpen(false)}>
                                <User2Icon />
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
        </div>
    );
};
