import { ActionType } from "./redux-store";

const initialStateProfilePage = {
  posts: [
    { id: 1, message: " Ho ", likeCount: 3 },
    { id: 2, message: " Hi ", likeCount: 4 },
    { id: 3, message: " Hi, who are you? ", likeCount: 23 },
    { id: 4, message: " Hi, I am fine ", likeCount: 50 },
    { id: 5, message: " Hello ", likeCount: 490 },
    { id: 6, message: " Hello Andrey ", likeCount: 40 },
    { id: 7, message: " Hello Igor ", likeCount: 90 },
  ] as PostType[],
  newPost: "" as string,
  profile: {} as ProfileType,
};
export type InitialStateProfilePageType = typeof initialStateProfilePage;
const profileReducer = (
  state: InitialStateProfilePageType = initialStateProfilePage,
  action: ActionType,
): InitialStateProfilePageType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: state.newPost,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPost: "",
      };
    }
    case "UPDATE-NEW-POST":
      return {
        ...state,
        newPost: action.newPostMessage,
      };

    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPostAC = () => ({ type: "ADD-POST" }) as const;
export const updateNewPostAC = (newPostMessage: string) =>
  ({ type: "UPDATE-NEW-POST", newPostMessage }) as const;
export const setUserProfile = (profile: ProfileType) =>
  ({ type: "SET-USER-PROFILE", profile }) as const;

export type PostType = {
  id: number;
  message: string;
  likeCount: number;
};

type ContactsType = {
  facebook: string;
  website: null;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: null;
  github: string;
  mainLink: null;
};
export type ProfileType = {
  aboutMe: string;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export type ProfilePageType = {
  posts: PostType[];
  newPost: string;
  profile: ProfileType;
};

export default profileReducer;
