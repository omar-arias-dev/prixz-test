import { useUser } from "@context/user";
import Form from "./views/Form";
import UserDetails from "./views/UserDetails";

export default function User() {
  const user = useUser();
  if (user?.user) return <UserDetails />;
  return <Form />;
}