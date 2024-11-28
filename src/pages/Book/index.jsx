import { useLocation } from "react-router";
import { BASE_COVER_URL, BOOK_IMAGE_KEY_URL } from "@common/constants";

export default function Book() {
  const { state } = useLocation();
  const { author_name, cover_edition_key, cover_i, first_sentence, key, ratings_average, title, subject, person } = state;
  console.log({ author_name, cover_edition_key, cover_i, first_sentence, key, ratings_average, title, subject, person });

  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      <article>
        <img
          alt={title ?? "book-image"}
          src={`${BASE_COVER_URL}${BOOK_IMAGE_KEY_URL}${cover_edition_key ? `olid/${cover_edition_key}` : `id/${cover_i}`}-L.jpg`}
        />
      </article>
    </section>
  );
}