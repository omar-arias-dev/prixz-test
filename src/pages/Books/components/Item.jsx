import {
  BASE_COVER_URL,
  BOOK_IMAGE_KEY_URL,
  AUTHOR_IMAGE_KEY_URL,
} from "@common/constants";
import RatingStars from "@components/RatingStars";

export default function Item({ type, itemData }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-48 h-64 bg-white shadow-lg rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-50 rounded-md border border-slate-300"></div>
        <img
          src={`${BASE_COVER_URL}${type === "BOOK" ? BOOK_IMAGE_KEY_URL : AUTHOR_IMAGE_KEY_URL}${(itemData?.cover_edition_key || (type === "AUTHOR")) ? `olid/${type === "AUTHOR" ? itemData?.key : itemData?.cover_edition_key}` : `id/${itemData?.cover_i}`}-L.jpg`}
          alt={itemData?.title ?? `item`}
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-slate-700 text-center">
          {type === "BOOK" ? itemData?.title : itemData?.name}
        </p>
        {
        type === "BOOK" && (  
          <p className="text-slate-400">
            {
              itemData?.author_name?.[0] ? itemData?.author_name?.[0] : "Without author"
            }
          </p>
        )
      }
      </div>
      {
        type === "BOOK" && (
          <div>
            <RatingStars rating={Math.floor(itemData?.ratings_average) ?? 0} />
          </div>
        )
      }
    </div>
  );
}