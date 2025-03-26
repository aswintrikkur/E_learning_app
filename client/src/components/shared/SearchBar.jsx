import React, { useState } from "react";
import { Input } from "../ui/input";

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <Input
            type="text"
            placeholder="Search courses..."
            className="w-full max-w-md border-gray-300 focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};
