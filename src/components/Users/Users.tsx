import React from "react";
import styles from "./users.module.css";
import { UsersProps } from "components/Users/UsersContainer";
import axios from "axios";
import { avatar, avatar2, av4, avatar_2, av5, av3, tony } from "img";

export const Users: React.FC<UsersProps> = ({ users, followM, unFollowM, setUsersM }) => {
  const getUsers = () => {
    if (users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res) => {
        // debugger
        setUsersM(res.data.items);
      });
    }
  };
  // debugger

  return (
    <div className={styles.usersBlock}>
      <button onClick={getUsers}>get users</button>
      {users.map((us) => (
        <div key={us.id} className={styles.user}>
          <span className={styles.userDetails}>
            <div>
              <img
                src={us.photos.small !== null ? us.photos.small : av4}
                className={styles.userPhoto}
                alt="avatar"
              />
            </div>
            <div>
              {us.followed ? (
                <button className={styles.followButton} onClick={() => followM(us.id)}>
                  unfollow
                </button>
              ) : (
                <button className={styles.followButton} onClick={() => unFollowM(us.id)}>
                  follow
                </button>
              )}
            </div>
          </span>
          <span className={styles.userAbout}>
            <span>
              <div className={styles.userName}>{us.name}</div>
              <div className={styles.userStatus}>{us.status}</div>
            </span>
            <span>
              <div className={styles.userLocation}>{"us.location.country"}</div>
              <div className={styles.userLocation}>{"us.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
