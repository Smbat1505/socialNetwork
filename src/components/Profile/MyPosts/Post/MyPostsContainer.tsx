import { MyPosts } from "../MyPosts";
import { addPostAC, PostType, updateNewPostAC } from "redux/profile-reduser";
import { connect } from "react-redux";
import { AppStateType } from "redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  posts: PostType[];
  newPost: string;
};
type MapDispatchPropsType = {
  updateNewPostText: (text: string) => void;
  addPost: () => void;
};

export type MyPostsPropsType = MapStateToPropsType & MapDispatchPropsType;

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPost,
  };
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchPropsType {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostAC(text));
    },
    addPost: () => dispatch(addPostAC()),
  };
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
