import { SearchBar } from "@/components/shared/SearchBar";
import { CourseCard, SkeletonCourseCard } from "@/components/user/CourseCard";
import { useFetch } from "@/hooks/useFetch.js";
// import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";

export const CoursesPage = () => {
    const [courseList, isLoading, error] = useFetch("/course/course-list");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter courses based on search term
    const filteredCourses = courseList?.filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()));

    //render course cards
    const renderCourses = () => filteredCourses?.map((course, index) => <CourseCard key={course?._id} course={course} />);

    //render skeletons
    const renderSkeletons = () => Array.from({ length: 4 }).map((_, index) => <SkeletonCourseCard key={index} />);

    return (
        <div className="container">
            {/* search-bar */}
            <div className="flex justify-center m-6">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {error && <p className="text-red-500 text-center col-span-full uppercase"> {error} </p>}

                {isLoading ? (
                    renderSkeletons()
                ) : filteredCourses?.length > 0 ? (
                    renderCourses()
                ) : (
                    <p className="text-gray-500 text-center col-span-full">No courses found.</p>
                )}
            </div>
        </div>
    );
};
