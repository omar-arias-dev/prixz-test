import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useFetch } from "@hooks/useFetch";
import {
  BASE_COVER_URL,
  BOOK_IMAGE_KEY_URL,
  AUTHOR_IMAGE_KEY_URL,
} from "@common/constants";
import SearchIcon from "@assets/icons/components/SearchIcon";
import Item from "./components/Item";

export default function Books() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const selectRef = useRef();
  const [booksControl, setBooksControl] = useState({
    query: "",
    page: 1,
    option: "",
  });
  const { data, loading, error } = useFetch(booksControl.query, booksControl.page, booksControl.option);

  const handleSearch = () => setBooksControl((prev) => ({ ...prev, query: inputRef.current.value, page: 1, option: selectRef.current.value }));
  const handlePageChange = (direction) => setBooksControl((prev) => ({ ...prev, page: prev.page + direction, option: selectRef.current.value }));
  const handleSendToBookDetailsClick = (book) => {
    navigate("/book", { state: book });
  }

  return (
    <>
      <header className="flex justify-center">
        <h1 className="text-2xl font-bold">
          Books & Authors
        </h1>
      </header>
      <section className="mt-4">
        <div className="flex justify-evenly items-center w-full">
          <select className="block px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed" ref={selectRef}>
            <option value="">Choose search option</option>
            <option value="AUTHOR">Author</option>
            <option value="BOOK">Book</option>
          </select>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              ref={inputRef}
              disabled={loading}
              onKeyDown={(e) => {
                if (!selectRef.current.value) return;
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed"
            />
            <button
              className="block max-w-xs px-2 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed"
              onClick={() => {
                if (!selectRef.current.value) return;
                handleSearch();
              }}
            >
                <SearchIcon />
            </button>
          </div>
        </div>
        <article className="my-8">
          {
            loading ? (
              <p>Loading...</p>
            ) : (error) ? (
              <p>Errorcirijillo</p>
            ) : (
              <div>
                {
                  (booksControl.query === "") ? (
                    <p>Search</p>
                  ) : (booksControl.query !== "" && Array.isArray(data) && data.length === 0) ? (
                    <p>{booksControl.option === "BOOK" ? "Book" : "Author"} not found</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
                      {
                        data?.map((entry) => (
                          <div
                            key={entry?.key}
                            className={`${booksControl.option === "BOOK" ? "cursor-pointer" : ""}`}
                            onClick={() => {
                              if (booksControl.option === "BOOK") {
                                handleSendToBookDetailsClick(entry);
                              }
                            }}
                          >
                            <Item type={booksControl.option} itemData={entry} />
                          </div>
                        ))
                      }
                    </div>
                  )
                }
              </div>
            )
          }
        </article>
      </section>
    </>
  );
}