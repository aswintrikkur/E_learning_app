import React from "react";
import { Button } from "../ui/button";

export const PrimaryButton = ({ value }) => {
    return <Button>{value} </Button>;
};
export const CallToActionButton = ({ value }) => {
    return <Button variant="destructive" size="lg">{value} </Button>;
};


