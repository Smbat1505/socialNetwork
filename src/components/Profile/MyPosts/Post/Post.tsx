import React from "react";
import styles from "./Post.module.css";
import avatar from "../../../../img/saig.png";

type PostPropsType = {
  key: number;
  message: string;
  likeCount: number;
};
export const Post: React.FC<PostPropsType> = ({ message, likeCount, children }) => {
  return (
    <section className={styles.post}>
      <img src={avatar} alt="" />
      <div>
        <b>{message + " "}</b>
      </div>

      <div>
        <span>{"_" + likeCount}</span>
      </div>
    </section>
  );
};
