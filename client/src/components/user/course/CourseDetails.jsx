import React from "react";
import { CourseContent } from "./CourseContent";
import { CourseInstructor } from "./CourseInstructor";
import { CourseReviews } from "./CourseReviews";
import { CourseOverview } from "./CourseOverview";
import { EnrollCourse } from "./EnrollCourse";

export const CourseDetails = ({ course }) => {
    if (!course) return <p className="text-center text-gray-500">Course not found.</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
            <div className="md:col-span-8 space-y-6">
                {/* course-overview */}
                <CourseOverview overview={course?.overview} />

                {/* Course Content (Curriculum) */}
                <CourseContent content={course?.content} />

                {/* Reviews */}
                <CourseReviews reviews={course?.reviews} />
            </div>
            <div className="md:col-span-4 flex flex-col gap-20">
                {/* Enroll Course */}
                <EnrollCourse price={course?.overview?.price} discount={30} timeLeft="1 day" image={course?.overview?.image} />

                {/* Instructor Details */}
                <CourseInstructor instructor={course?.instructor} />
                
            </div>
        </div>
    );
};
