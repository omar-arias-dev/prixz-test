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
        <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
          <div className="flex flex-no-shrink items-stretch h-12">
            <p onClick={() => {handleNavigateTabChange("books")}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center cursor-pointer hover:bg-slate-300">Books & Authors</p>
            <p onClick={() => {handleNavigateTabChange("user")}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center cursor-pointer hover:bg-slate-300">{user?.user ? "Profile" : "Login"}</p>
          </div>
          {
            user?.user && (
              <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
                <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                  <p onClick={() => {user?.unregister()}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center cursor-pointer hover:bg-slate-300">Logout</p>
                </div>
              </div>
            )
          }
        </nav>
      </header>
      <div className="flex-1 mt-4 p-6">
        <Outlet />
      </div>
      <footer className="mb-4 mx-4 py-2 text-center rounded-md bg-slate-100">Developed by <b className="cursor-pointer" onClick={() => window.open("https://github.com/omar-arias-dev")}>Omar Arias</b></footer>
    </main>
  );
}