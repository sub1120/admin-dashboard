import { IUser, IUserResponseData } from "./types";

// It normalises api response in below format
/*
{
    id1: { 
        firstName: "alex";
        lastName: "sahu";
        phoneNumber: 12344334323;
        age: 24;
    },
    id2: { 
        firstName: "golu";
        lastName: "kumar";
        phoneNumber: 12344334323;
        age: 24;
    },
    id3: { 
        firstName: "mang";
        lastName: "thouthang";
        phoneNumber: 12344334323;
        age: 24;
    },
    ....
}

*/

export const normalizeData = (
  data: IUserResponseData | [IUserResponseData]
): { [id: string]: IUser } | IUser => {
  if (Array.isArray(data)) {
    let updatedData: { [id: string]: IUser } = {};
    data.forEach((item) => {
      const key: string = item._id;

      updatedData[key] = {
        firstName: item.firstName,
        lastName: item.lastName,
        phoneNumber: item.phoneNumber,
        age: item.age,
      };
    });

    return updatedData;
  }

  let updatedData: IUser | null = {
    firstName: data.firstName,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
    age: data.age,
  };

  return updatedData;
};
