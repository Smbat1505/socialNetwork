import { instance } from "api/api";

export const authAPI = {
  follow(id: number) {
    return instance.post<ResponseType>(`follow/${id}`, {}).then((res) => {
      return res.data;
    });
  },
  unfollow(id: number) {
    return instance.delete<ResponseType>(`follow/${id}`).then((res) => {
      return res.data;
    });
  },
};

type ResponseType = {
  resultCode: number;
  messages: string[];
  data: Record<string, any>; // Represents an object with string keys and any values
};
