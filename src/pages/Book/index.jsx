import { useLocation } from "react-router";
import { BASE_COVER_URL, BOOK_IMAGE_KEY_URL } from "@common/constants";
import RatingStars from "@components/RatingStars";
import Badge from "@components/Badge";
import CharacterIcon from "@assets/icons/components/CharacterIcon";

export default function Book() {
  const { state } = useLocation();
  const {
    author_name,
    cover_edition_key,
    cover_i,
    first_sentence,
    key,
    ratings_average,
    title,
    subject,
    person,
  } = state ?? {};

  return (
    <section className="flex flex-col md:flex-row w-full">
      <aside className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 bg-gray-100">
        <header>
          <h1 className="text-2xl font-bold">{title ?? "book title"}</h1>
        </header>
        <div className="relative w-48 h-64 bg-white shadow-lg rounded-md overflow-hidden my-6">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-50 rounded-md border border-slate-300"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-md"
            alt={title ?? "book-image"}
            src={`${BASE_COVER_URL}${BOOK_IMAGE_KEY_URL}${cover_edition_key ?? ""
                ? `olid/${cover_edition_key ?? ""}`
                : `id/${cover_i ?? ""}`
              }-L.jpg`}
          />
        </div>
        <p className="text-slate-600">
          {
            author_name?.[0] ? author_name?.[0] : "Without author"
          }
        </p>
      </aside>
      <aside className="w-full md:w-1/2 flex flex-col justify-between p-6 bg-gray-200">
        <div className="flex w-full justify-around">
          <h3>Rating</h3>
          <b>{Math.floor(ratings_average) ?? 0}.0</b>
          <RatingStars rating={Math.floor(ratings_average) ?? 0} />
        </div>
        {
          Array.isArray(subject) && subject?.length > 0 && (
            <div className="flex space-x-4 justify-center">
              {
                subject?.slice(0, 4)?.map((sub, index) => (
                  <div key={index}>
                    <Badge value={sub} />
                  </div>
                ))
              }
            </div>
          )
        }
        <div className="grid grid-cols-1 md:grid-cols-2 px-5">
          <div className="flex flex-col">
            {person?.length &&
              person?.slice(0, 5)?.map((character, index) => (
                <div key={index} className="flex flex-row items-center w-auto">
                  <CharacterIcon width={20} heigth={20} />
                  <p>{character}</p>
                </div>
              ))}
          </div>
          <div>
            <p><i>"{first_sentence}""</i></p>
          </div>
        </div>
      </aside>
    </section>
  );
}
