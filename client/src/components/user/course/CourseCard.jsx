import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

//*this component contain courseCards and courseCardSkeletons

export const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    return (
        <Card
            className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg"
            onClick={() => navigate(`/courseDetails/${course?._id}`)}
        >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader>
                <CardTitle className="text-lg font-bold">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 text-sm">{course.description}</p>
                <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(course.rating)].map((_, index) => (
                        <Star key={index} size={16} fill="currentColor" />
                    ))}
                </div>
                <p className="mt-2 font-semibold text-lg">₹{course.price}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button variant="default" className="w-full">
                    Enroll Now
                </Button>
            </CardFooter>
        </Card>
    );
};

export function SkeletonCourseCard() {
    return (
        <Card className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg">
            {/* Skeleton Image */}
            <Skeleton className="w-full h-48 rounded-t-lg" />

            <CardHeader>
                {/* Skeleton Title */}
                <Skeleton className="h-6 w-3/4" />
            </CardHeader>

            <CardContent>
                {/* Skeleton Description */}
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />

                {/* Skeleton Rating */}
                <div className="flex items-center gap-1">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                </div>

                {/* Skeleton Price */}
                <Skeleton className="h-6 w-1/3 mt-3" />
            </CardContent>

            <CardFooter>
                {/* Skeleton Button */}
                <Skeleton className="h-10 w-full rounded-md" />
            </CardFooter>
        </Card>
    );
}
