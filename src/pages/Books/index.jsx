import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useFetch } from "@hooks/useFetch";
import { BASE_COVER_URL } from "@common/constants";

export default function Books() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [booksControl, setBooksControl] = useState({
    query: "",
    page: 1,
  });
  const { data, loading, error } = useFetch(booksControl.query, booksControl.page);

  const handleSearch = () => setBooksControl((prev) => ({ ...prev, query: inputRef.current.value, page: 1 }));
  const handlePageChange = (direction) => setBooksControl((prev) => ({ ...prev, page: prev.page + direction }));
  const handleSendToBookDetailsClick = (book) => {
    navigate("/book", { state: book });
  }

  return (
    <>
      <header>
        <h1>
          Books
        </h1>
      </header>
      <section className="mt-4">
        <>
          <input
            type="text"
            placeholder="search a book"
            ref={inputRef}
            disabled={loading}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button disabled={loading} onClick={handleSearch}>hey soy un botón para buscar</button>
          {
            loading ? (
              <p>Loading...</p>
            ) : (error) ? (
              <p>Errorcirijillo</p>
            ) : (
              <div>
                {
                  (booksControl.query === "") ? (
                    <p>Search a book</p>
                  ) : (booksControl.query !== "" && Array.isArray(data) && data.length === 0) ? (
                    <p>Book not found</p>
                  ) : (
                    <div className="mt-4">
                      {
                        data?.map((book, index) => (
                          <div
                            key={book?.key}
                            className="border border-zinc-600 m-2 p-4 cursor-pointer"
                            onClick={() => handleSendToBookDetailsClick(book)}
                          >
                            <img
                              alt={book?.title ?? `book-${index}`}
                              src={`${BASE_COVER_URL}${book?.cover_edition_key ? `olid/${book?.cover_edition_key}` : `id/${book?.cover_i}`}-L.jpg`}
                            />
                            <p>{book?.title ?? ""}</p>
                          </div>
                        ))
                      }
                    </div>
                  )
                }
              </div>
            )
          }
        </>
      </section>
    </>
  );
}