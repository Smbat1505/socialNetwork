import { ActionType } from "./redux-store";

const initialUsersState = {
  users: [] as UserType[],
  pageSize: 100,
  totalUsersCounter: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as number[],
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
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user,
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
    case "TOGGLE-IS-FOLLOWING-IN-PROGRESS":
      // debugger;
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id: number) => id !== action.id),
      };
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
export const toggleFollowingInProgress = (isFetching: boolean, id: number) =>
  ({
    type: "TOGGLE-IS-FOLLOWING-IN-PROGRESS",
    isFetching,
    id,
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
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

export type InitialStateUsersPageType = typeof initialUsersState;

export default usersReducer;
