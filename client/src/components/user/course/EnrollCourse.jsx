import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const EnrollCourse = ({ price, discount, timeLeft,image }) => {
    const discountedPrice = (price * discount) / 100;

    return (
        <div className="bg-card shadow-lg rounded-lg p-4 space-y-4 border border-border transition-colors">

            {/* Course Image */}
            {image && (
                <div className="mt-4">
                    <AspectRatio ratio={16 / 9} className="w-full   mx-auto">
                        <img src={image} alt={"course-title"} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </AspectRatio>
                </div>
            )}

            {/* Price & Discount */}
            <div className="text-center">
                <p className="text-muted-foreground text-sm">This Premium course is included in plans</p>
                <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-foreground">₹{discountedPrice}</span>
                    <span className="text-muted-foreground line-through">₹{price}</span>
                    <span className="text-destructive font-semibold">{discount}% off</span>
                </div>
                {timeLeft && <p className="text-destructive text-sm font-medium">⏳ {timeLeft} left at this price!</p>}
            </div>

            {/* CTA Buttons */}
            <Button variant="" className="w-full ">
                Add to cart
            </Button>
            <Button variant="destructive" className="w-full ">
                Buy now
            </Button>

            {/* Extra Details */}
            <p className="text-center text-sm text-muted-foreground">
                30-Day Money-Back Guarantee <br />
                Full Lifetime Access
            </p>

            {/* Links */}
            <div className="flex justify-between text-sm text-primary font-medium">
                <span className="cursor-pointer hover:underline">Share</span>
                <span className="cursor-pointer hover:underline">Gift this course</span>
                <span className="cursor-pointer hover:underline">Apply Coupon</span>
            </div>
        </div>
    );
};
