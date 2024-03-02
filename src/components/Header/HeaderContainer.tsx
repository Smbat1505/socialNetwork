import React from "react";
import { Header } from "components/Header/Header";
import axios from "axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { DataType, setAuthUserData } from "redux/auth-reduser";
import { AppStateType } from "redux/redux-store";

class HeaderContainer extends React.Component<AuthType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
        headers: {
          "API-KEY": "ccfb810e-d396-43d3-bd23-d75be8db7355",
        },
      })
      .then((res) => {
        // debugger;
        if (res.data.resultCode === 0) {
          const data = res.data.data;
          this.props.setAuthUserDataM(data);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
  return {
    setAuthUserDataM: (data: DataType) => {
      dispatch(setAuthUserData(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchToPropsType = {
  setAuthUserDataM: (data: DataType) => void;
};
export type AuthType = MapStateToPropsType & MapDispatchToPropsType;
