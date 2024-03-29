import React from "react";
import styles from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostContainer } from "./MyPosts/Post/MyPostsContainer";

type ProfileType = {
  // store: ReduxStoreType;
};
export const Profile: React.FC<ProfileType> = () => {
  return (
    <main className={styles.main}>
      <ProfileInfo />
      <MyPostContainer />
    </main>
  );
};
