import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const CourseContent = ({ content }) => {
    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold">Course Curriculum</h2>
            <Accordion type="single" collapsible className="mt-4">
                {content.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger>{module.title}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc list-inside text-gray-600">
                                {module.lessons.map((lesson, idx) => (
                                    <li key={idx}>{lesson}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
