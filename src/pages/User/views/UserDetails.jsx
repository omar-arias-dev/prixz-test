import { useUser } from "@context/user";

export default function UserDetails() {
  const { user: userContext } = useUser();

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        User Details
      </h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Name:</span>
          <span className="text-gray-800">{userContext.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Last Name:</span>
          <span className="text-gray-800">{userContext.lastName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Birthday:</span>
          <span className="text-gray-800">{userContext.birthday}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Email:</span>
          <span className="text-gray-800">{userContext.email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Gender:</span>
          <span className="text-gray-800">{userContext.genere}</span>
        </div>
      </div>
    </div>
  );
}
