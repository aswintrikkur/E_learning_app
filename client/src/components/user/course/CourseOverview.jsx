import { Badge } from "@/components/ui/badge";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export const CourseOverview = ({ overview }) => {
    return (
        <Card className="bg-card p-6 rounded-xl shadow-md">
            {/* Course Title and Description */}
            <h1 className="text-4xl font-bold">{overview?.title}</h1>
            <p className="text-muted-foreground  mt-6 mb-4">{overview?.description}</p>

            <div className="w-full flex gap-3">
                <Button variant="outline" className="w-6/12 my-6 md:hidden">
                    Add to Cart
                </Button>
                <Button variant="destructive" className="w-6/12 my-6 md:hidden">
                    Enroll Now
                </Button>
            </div>

            {/* Course Details */}
            <div className="mt-4 text-sm font-medium  space-y-2">
                <p>
                    <strong>Duration:</strong> {overview?.duration}
                </p>
                <p>
                    <strong>Level:</strong> {overview?.level}
                </p>
                <p>
                    <strong>Language:</strong> {overview?.language}
                </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
                {overview?.tags?.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="px-5 py-2 font-bold">
                        {tag}
                    </Badge>
                ))}
            </div>

            {/* Course Image
            {overview?.image && (
                <div className="mt-4">
                    <AspectRatio ratio={16 / 9} className="w-full   mx-auto">
                        <img src={overview.image} alt={overview.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </AspectRatio>
                </div>
            )} */}

            <Carousel className="w-full max-w-2xl mx-auto my-5 ">
                <CarouselContent>
                    {overview?.imageGroup?.map((value, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                {/* <Card> */}
                                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                                <AspectRatio ratio={16 / 9} className="w-full   mx-auto">
                                    <img src={value} alt={overview.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                                </AspectRatio>
                                {/* </CardContent> */}
                                {/* </Card> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* Demo Video Section */}
            {overview?.demoVideo && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Course Preview</h2>
                    <AspectRatio ratio={16 / 9} className="mt-2">
                        <iframe
                            src={overview.demoVideo}
                            title="Course Demo Video"
                            allowFullScreen
                            className="w-full h-full rounded-lg shadow-md"
                        />
                    </AspectRatio>
                </div>
            )}
        </Card>
    );
};
