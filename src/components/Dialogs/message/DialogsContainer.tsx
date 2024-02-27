import { Dialogs } from "../Dialogs";
import {
  initialStateDialogsPageType,
  sendMessageAC,
  updateNewMessageBodyAC,
} from "redux/dialogs-reduser";
import { connect } from "react-redux";
import { AppStateType } from "redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  dialogsPage: initialStateDialogsPageType;
};
type MapDispatchToPropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
};
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyAC(body));
    },
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
  };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
