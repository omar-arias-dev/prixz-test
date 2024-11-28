import React from "react";

const StarRating = ({ rating, maxStars = 5 }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(
          <svg
            key={i}
            className="shrink-0 w-5 h-5 text-yellow-400 dark:text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        );
      } else if (i - 1 < rating && rating < i) {
        stars.push(
          <svg
            key={i}
            className="shrink-0 w-5 h-5 text-yellow-400 dark:text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            <rect
              x="8"
              y="0"
              width="8"
              height="16"
              className="fill-gray-300 dark:fill-neutral-600"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="shrink-0 w-5 h-5 text-gray-300 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        );
      }
    }
    return stars;
  };

  return <div className="flex items-center">{renderStars()}</div>;
};

export default StarRating;
