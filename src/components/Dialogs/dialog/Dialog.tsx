import React from "react";
import dialogStyle from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import avatar from "../../../img/saig.png";

type DialogPropsType = {
  id: number;
  name: string;
};
export const Dialog: React.FC<DialogPropsType> = ({ id, name, children }) => {
  let path = "/dialogs/1" + id;
  return (
    <div className={dialogStyle.dialog + " " + dialogStyle.active}>
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"
        alt="photo"
      />
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};
