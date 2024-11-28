import { Outlet, useNavigate } from "react-router";
import { useUser } from "@context/user";

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
    <main>
      <header>
        <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
          <div className="flex flex-no-shrink items-stretch h-12">
            <p onClick={() => {handleNavigateTabChange("books")}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center hover:bg-sky-700">Books</p>
            <p onClick={() => {handleNavigateTabChange("user")}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center hover:bg-sky-700">{user?.user ? "Profile" : "Login"}</p>
          </div>
          {
            user?.user && (
              <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
                <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                  <p onClick={() => {user?.unregister()}} className="flex-no-grow flex-no-shrink relative py-2 px-4 flex items-center hover:bg-sky-700">Cerrar sesión</p>
                </div>
              </div>
            )
          }
        </nav>
      </header>
      <Outlet />
    </main>
  );
}