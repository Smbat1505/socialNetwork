import { instance } from "api/api";
import { UserType } from "redux/users-reduser";

export const userAPI = {
  getUser(currentPage: number, pageSize: number) {
    return instance
      .get<ItemsResponse>(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => {
        // debugger;
        return res.data;
      });
  },
};

type ItemsResponse = {
  items: UserType[];
  totalCount: number;
  error: string | null;
};
