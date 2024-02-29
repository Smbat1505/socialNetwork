import React from "react";
import styles from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostContainer } from "./MyPosts/Post/MyPostsContainer";
import { ProfileType } from "redux/profile-reduser";

export const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <main className={styles.main}>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </main>
  );
};

export interface ProfileProps {
  profile: ProfileType;
}
