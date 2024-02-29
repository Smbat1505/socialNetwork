import React from "react";
import styles from "./ProfileInfo.module.css";
import { Preloader } from "components/common/preolader/Preloader";
import { ProfileProps } from "components/Profile/Profile";

export const ProfileInfo: React.FC<ProfileProps> = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  console.log(props.profile);
  return (
    <main className={styles.profileInfo}>
      <section className={""}>
        <img
          src="https://www.chinadiscovery.com/assets/images/xinjiang/altay/guide/kanas-feixiang-mfw.jpg"
          alt="altay"
          className={styles.frontPhoto}
        />
      </section>
      <section className={styles.ava}>
        <div
          style={{
            position: "absolute",
            bottom: "115px",
            borderRadius: "50%",
            left: "69px",
            boxShadow: "0px 0px 10px 4px #10ff00",
          }}
        >
          {props.profile.photos && props.profile.photos.large && (
            <img style={{ borderRadius: "100%" }} src={props.profile.photos.large} alt={""} />
          )}
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "10px" }}
        >
          <span>{props.profile.aboutMe}</span>
          <span>contacts:</span>
          {props.profile.contacts && props.profile.contacts.facebook ? (
            <span>{props.profile.contacts.facebook}</span>
          ) : (
            <span>No info about Facebook</span>
          )}
          {props.profile.contacts && props.profile.contacts.github ? (
            <span>{props.profile.contacts.github}</span>
          ) : (
            <span>No info about GitHub</span>
          )}
          {props.profile.contacts && props.profile.contacts.vk ? (
            <span>{props.profile.contacts.vk}</span>
          ) : (
            <span>No info about Vk</span>
          )}
          {props.profile.contacts && props.profile.contacts.mainLink ? (
            <span>{props.profile.contacts.mainLink}</span>
          ) : (
            <span>No info about mainLink</span>
          )}
          <span>{props.profile.fullName}</span>
          <span>{props.profile.lookingForAJob}</span>
          <span>{props.profile.lookingForAJobDescription}</span>
          ava
        </div>
      </section>
    </main>
  );
};
