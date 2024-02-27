import { ActionType } from "./redux-store";

const initialUsersState = {
  users: [] as UserType[],
  pageSize: 100,
  totalUsersCounter: 0,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (
  state: InitialStateUsersPageType = initialUsersState,
  action: ActionType,
): InitialStateUsersPageType => {
  // debugger
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user,
        ),
      };
    case "SET-USERS":
      return { ...state, users: action.users };

    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.currentPage };

    case "SET-USERS-TOTAL-COUNT":
      return { ...state, totalUsersCounter: action.totalUsersCount };

    case "TOGGLE-IS-FETCHING":
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const Follow = (userId: number) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};
export const UnFollow = (userId: number) => {
  return {
    type: "UNFOLLOW",
    userId,
  } as const;
};

export const SetUsers = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};

export const SetCurrentPage = (currentPage: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage,
  } as const;
};

export const toggleIsFetching = (isFetching: boolean) =>
  ({
    type: "TOGGLE-IS-FETCHING",
    isFetching,
  }) as const;

export const setUsersTotalCount = (totalUsersCount: number) =>
  ({
    type: "SET-USERS-TOTAL-COUNT",
    totalUsersCount,
  }) as const;

export type PostType = {
  id: number;
  fillMame: string;
  likeCount: number;
};
type ProfilePageType = {
  posts: PostType[];
  newPost: string;
};

export type UserType = {
  id: number;
  photos: {
    small: string | undefined;
    large: string | undefined;
  };
  followed: boolean;
  name: string;
  status: string;
  uniqueUrlName: null;
  location: {
    city: string;
    country: string;
  };
};

export type InitialStateUsersPageType = typeof initialUsersState;

export default usersReducer;
