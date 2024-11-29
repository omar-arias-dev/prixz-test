import { Outlet, useNavigate } from "react-router";
import { useUser } from "@context/user";
import BookIcon from "@assets/icons/components/BookIcon";

export default function PrivateRoute() {
  const user = useUser();
  const navigate = useNavigate();

  const handleNavigateTabChange = (key) => {
    switch (key) {
      case "books":
        navigate("/");
        break;
      case "user":
        navigate("/user");
        break;
      default:
        break;
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <header className="flex items-center px-5 mt-4 mx-2 rounded-md bg-slate-200">
        <div className="mr-6">
          <BookIcon width={20} heigth={20} />
        </div>
        <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full flex">
          <div className="flex flex-no-shrink items-stretch h-12">
            <p onClick={() => {handleNavigateTabChange("books")}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center cursor-pointer font-semibold hover:bg-slate-300">Books & Authors</p>
            <p onClick={() => {handleNavigateTabChange("user")}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center cursor-pointer font-semibold hover:bg-slate-300">{user?.user ? "Profile" : "Login"}</p>
          </div>
          {
            user?.user && (
              <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow flex items-center justify-center">
                <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                  <p onClick={() => {user?.unregister()}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center font-semibold cursor-pointer hover:bg-slate-300">Logout</p>
                </div>
              </div>
            )
          }
        </nav>
      </header>
      {/* <nav className="flex justify-between px-20 py-10 items-center bg-white">
        <div className="mr-6">
          <BookIcon width={20} heigth={20} />
        </div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-gray-700">Home</li>
            <li className="font-semibold text-gray-700">Articles</li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="flex-1 mt-4 p-6">
        <Outlet />
      </div>
      <footer className="mb-4 mx-4 py-2 text-center rounded-md bg-slate-100">Developed by <b className="cursor-pointer" onClick={() => window.open("https://github.com/omar-arias-dev")}>Omar Arias</b></footer>
    </main>
  );
}