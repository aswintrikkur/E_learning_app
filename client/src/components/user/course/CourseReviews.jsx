import React from "react";
import { Star } from "lucide-react";

export const CourseReviews = ({ reviews }) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">Student Reviews</h2>
      <div className="mt-4 space-y-4">
        {reviews?.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                <strong>{review?.name}</strong>
                <div className="flex text-yellow-500">
                  {Array.from({ length: review?.rating }).map((_, idx) => (
                    <Star key={idx} size={16} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mt-2">{review?.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};
