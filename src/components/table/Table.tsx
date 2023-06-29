import { deleteUserByID } from "../../redux/users/userSlice";
import { useAppDispatch } from "../../store";
import { IUser } from "../../utils/types";

interface AppProps {
  users: { [id: string]: IUser };
}

const Table = ({ users }: AppProps) => {
  const usersArray = Object.entries(users);
  const dispatch = useAppDispatch();

  const handleRemoveUser = (id: string) => {
    dispatch(deleteUserByID(id));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-blue-600 text-xs uppercase text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Remove</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersArray.map(([id, user]: [string, IUser]) => {
            return (
              <tr className="border-b bg-white hover:bg-gray-100" key={id}>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium"
                >
                  {user.firstName}
                </th>
                <td className="px-6 py-4">{user.lastName}</td>
                <td className="px-6 py-4">{user.phoneNumber}</td>
                <td className="px-6 py-4">{user.age}</td>
                <td className="px-6 py-4 text-right">
                  <div className="cursor-pointer font-medium text-blue-500 hover:underline">
                    Edit
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-red-500">
                  <div
                    className="cursor-pointer font-medium hover:underline"
                    onClick={() => handleRemoveUser(id)}
                  >
                    Remove
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
