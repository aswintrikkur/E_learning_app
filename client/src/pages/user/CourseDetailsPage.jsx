import { CourseDetails } from "@/components/user/course/CourseDetails";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const CourseDetailsPage = () => {
    const [courseDetails, isLoadin, error] = useFetch("/data/courseData.json", true);


    return (
        <>

            <CourseDetails course={courseDetails} />
        </>
    );
};
