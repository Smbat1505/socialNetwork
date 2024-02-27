import React from "react";
import styles from "components/Users/users.module.css";
import { avatar_2 } from "img";
import { UsersProps } from "components/Users/UsersContainer";

export const UsersPr: React.FC<UsersPrType> = (props) => {
  let pagesCount = Math.ceil(props.totalUserCounter / props.pageSize);

  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.usersBlock}>
      <div className={styles.selectPageBlock}>
        {pages.map((p) => {
          return (
            <span key={p}>
              <a
                href="#"
                className={props.currentPage === p ? styles.active : ""}
                onClick={() => props.onPageChanged(p)}
                style={{ padding: "10px", marginLeft: "10px" }}
              >
                {p}
              </a>
            </span>
          );
        })}
      </div>
      {props.users.map((us) => (
        <div key={us.id} className={styles.user}>
          <span className={styles.userDetails}>
            <div>
              <img
                src={us.photos.small !== null ? us.photos.small : avatar_2}
                className={styles.userPhoto}
                alt="аватар"
              />
            </div>
            <div>
              {us.followed ? (
                <button className={styles.followButton} onClick={() => props.followM(us.id)}>
                  Отписаться
                </button>
              ) : (
                <button className={styles.followButton} onClick={() => props.unFollowM(us.id)}>
                  Подписаться
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

type UsersPrType = UsersProps & {
  onPageChanged: (pageNumber: number) => void;
};
