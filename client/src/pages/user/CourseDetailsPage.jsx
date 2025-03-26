import { CourseDetails } from "@/components/user/course/CourseDetails";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CourseDetailsPage = () => {

        const {courseId} = useParams();
        console.log("courseId========",courseId);
        

    // const [courseDetails, isLoadin, error] = useFetch("/data/courseData.json", true);
    const [courseDetails, isLoadin, error] = useFetch(`/course/course-details/${courseId}`);

    console.log(courseDetails,'=======courseDetails');
    
    


    return (
        <>

            <CourseDetails course={courseDetails} />
        </>
    );
};
