import { useEffect } from "react";
import { deleteUserByID, fetchAllUsers } from "../../redux/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { IUser } from "../../utils/types";
import Loader from "../icon/Loader";
import AddUserModal from "../modal/AddUserModal";
import UpdateUserModal from "../modal/UpdateUserModal";

const Table = () => {
  const users = useAppSelector((state) => state.user.users);
  const loading = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleRemoveUser = (id: string) => {
    dispatch(deleteUserByID(id));
  };

  return (
    <>
      <div className="my-5">
        <AddUserModal />
      </div>

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
            {loading === "pending" ? (
              <tr>
                <th colSpan={6} className="py-20">
                  <Loader />
                </th>
              </tr>
            ) : (
              Object.entries(users).map(([id, user]: [string, IUser]) => {
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
                    <td className="py-4">
                      <UpdateUserModal id={id} />
                    </td>
                    <td className="py-4 pr-4 text-right text-red-500">
                      <a
                        className="cursor-pointer font-medium hover:underline"
                        onClick={() => handleRemoveUser(id)}
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
